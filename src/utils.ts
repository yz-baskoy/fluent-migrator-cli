import * as fs from 'fs';
import * as path from 'path';

/**
 * Mevcut migration dosyalarından namespace'i otomatik algılar
 */
export function determineNamespace(
    migrationsDir: string,
    defaultNamespace: string = "YourNamespace.Migrations"
): string {
    if (!fs.existsSync(migrationsDir)) {
        return defaultNamespace;
    }
    
    const files = fs.readdirSync(migrationsDir);
    
    for (const filename of files) {
        if (filename.endsWith('.cs')) {
            const filePath = path.join(migrationsDir, filename);
            const content = fs.readFileSync(filePath, 'utf-8');
            const match = content.match(/namespace\s+([\w.]+);/);
            
            if (match) {
                return match[1];
            }
        }
    }
    
    return defaultNamespace;
}

/**
 * Geçerli tarih ve saat için timestamp oluşturur (YYYYMMDDHHmmss formatında)
 */
export function generateTimestamp(): string {
    const now = new Date();
    
    return now.getFullYear().toString() +
        (now.getMonth() + 1).toString().padStart(2, '0') +
        now.getDate().toString().padStart(2, '0') +
        now.getHours().toString().padStart(2, '0') +
        now.getMinutes().toString().padStart(2, '0') +
        now.getSeconds().toString().padStart(2, '0');
}

/**
 * Migrations klasörünü oluşturur (yoksa)
 */
export function ensureMigrationsDir(migrationsDir: string): void {
    if (!fs.existsSync(migrationsDir)) {
        fs.mkdirSync(migrationsDir, { recursive: true });
    }
}

/**
 * Dosya adının zaten var olup olmadığını kontrol eder
 */
export function fileExists(fullPath: string): boolean {
    return fs.existsSync(fullPath);
}

/**
 * Mevcut dosyalardan yeni oluşturulacaktan daha yeni olanları bulur
 */
export function findNewerFiles(migrationsDir: string, currentFilename: string): string[] {
    const existingFiles = fs.readdirSync(migrationsDir);
    return existingFiles.filter(file => file > currentFilename);
}