#!/usr/bin/env node
import { getMessages } from './messages';
import { createMigration } from './migration';

/**
 * fluent-migrator-cli
 * CLI tool for generating FluentMigrator C# migration files
 * 
 * Entry point for the CLI application
 */
function main(): void {
    const msgs = getMessages();
    const args = process.argv.slice(2);
    
    if (args.length !== 1) {
        console.log(msgs.usage);
        process.exit(1);
    }
    
    const migrationName = args[0];
    createMigration(migrationName);
}

main();