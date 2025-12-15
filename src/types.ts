export interface Messages {
    usage: string;
    file_exists: string;
    warning_newer_file: string;
    success: string;
    namespace_not_found: string;
}

export interface MigrationConfig {
  name: string;
  timestamp: string;
  namespace: string;
  migrationsDir: string;
}

export type SupportedLanguage = 'en' | 'tr' | 'fr' | 'it' | 'de';
