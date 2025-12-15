import * as fs from 'fs';
import * as path from 'path';
import { MigrationConfig } from './types';
import { getMessages, formatMessage } from './messages';
import {
    determineNamespace,
    generateTimestamp,
    ensureMigrationsDir,
    fileExists,
    findNewerFiles
} from './utils';

/**
 * Migration template içeriğini oluşturur
 */
function generateMigrationContent(config: MigrationConfig): string {
    return `using FluentMigrator;

namespace ${config.namespace};

[Migration(${config.timestamp})]
public class _${config.timestamp}_${config.name} : Migration
{
    public override void Up()
    {
    }

    public override void Down()
    {
    }
}
`;
}

/**
 * Migration dosyası oluşturur
 */
export function createMigration(migrationName: string): void {
    const msgs = getMessages();
    const timestamp = generateTimestamp();
    const filename = `${timestamp}_${migrationName}.cs`;
    const migrationsDir = path.join(process.cwd(), "Migrations");
    
    // Migrations klasörünü oluştur
    ensureMigrationsDir(migrationsDir);
    
    const fullPath = path.join(migrationsDir, filename);
    
    // Dosya zaten varsa hata ver
    if (fileExists(fullPath)) {
        console.log(formatMessage(msgs.file_exists, filename));
        return;
    }
    
    // Daha yeni tarihli dosyalar varsa uyar
    const newerFiles = findNewerFiles(migrationsDir, filename);
    newerFiles.forEach(newerFile => {
        console.log(formatMessage(msgs.warning_newer_file, newerFile));
    });
    
    // Determine namespace
    const defaultNamespace = "YourNamespace.Migrations";
    const namespace = determineNamespace(migrationsDir, defaultNamespace);
    
    if (namespace === defaultNamespace) {
        console.log(formatMessage(msgs.namespace_not_found, defaultNamespace));
    }
    
    // Migration config oluştur
    const config: MigrationConfig = {
        name: migrationName,
        timestamp,
        namespace,
        migrationsDir
    };
    
    // Dosya içeriğini oluştur ve yaz
    const content = generateMigrationContent(config);
    fs.writeFileSync(fullPath, content, 'utf-8');
    
    console.log(formatMessage(msgs.success, fullPath));
}