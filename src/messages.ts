import { Messages, SupportedLanguage } from './types';

const messages: Record<SupportedLanguage, Messages> = {
    'en': {
        usage: "Usage: fluent-migrator-cli <migration_name> or fmcli <migration_name>",
        file_exists: "Error: A file named {0} already exists.",
        warning_newer_file: "\x1b[93mWarning:\x1b[0m The file {0} has a more recent date than the file being created.",
        success: "Migration file \x1b[92msuccessfully\x1b[0m created: {0}",
        namespace_not_found: "\x1b[93mWarning:\x1b[0m Unable to determine namespace from existing files. Using default '{0}'.",
    },
    'tr': {
        usage: "Kullanım: fluent-migrator-cli <migration_name> veya fmcli <migration_name>",
        file_exists: "Hata: {0} isimli bir dosya zaten mevcut.",
        warning_newer_file: "\x1b[93mUyarı:\x1b[0m {0} dosyası, yeni oluşturulacak dosyadan daha yeni bir tarihte.",
        success: "Migration dosyası \x1b[92mbaşarıyla\x1b[0m oluşturuldu: {0}",
        namespace_not_found: "\x1b[93mUyarı:\x1b[0m Mevcut dosyalardan namespace belirlenemedi. Varsayılan '{0}' kullanılıyor.",
    },
    'fr': {
        usage: "Usage: fluent-migrator-cli <nom_migration> ou fmcli <nom_migration>",
        file_exists: "Erreur: Un fichier nommé {0} existe déjà.",
        warning_newer_file: "\x1b[93mAttention:\x1b[0m Le fichier {0} a une date plus récente que le fichier en cours de création.",
        success: "Fichier de migration créé avec \x1b[92msuccès\x1b[0m: {0}",
        namespace_not_found: "\x1b[93mAttention:\x1b[0m Impossible de déterminer le namespace à partir des fichiers existants. Utilisation de '{0}' par défaut.",
    },
    'it': {
        usage: "Uso: fluent-migrator-cli <nome_migrazione> o fmcli <nome_migrazione>",
        file_exists: "Errore: Un file di nome {0} esiste già.",
        warning_newer_file: "\x1b[93mAttenzione:\x1b[0m Il file {0} ha una data più recente del file in fase di creazione.",
        success: "File di migrazione creato con \x1b[92msuccesso\x1b[0m: {0}",
        namespace_not_found: "\x1b[93mAttenzione:\x1b[0m Impossibile determinare il namespace dai file esistenti. Utilizzo del default '{0}'.",
    },
    'de': {
        usage: "Verwendung: fluent-migrator-cli <migrations_name> oder fmcli <migrations_name>",
        file_exists: "Fehler: Eine Datei mit dem Namen {0} existiert bereits.",
        warning_newer_file: "\x1b[93mWarnung:\x1b[0m Die Datei {0} hat ein neueres Datum als die zu erstellende Datei.",
        success: "Migrationsdatei \x1b[92merfolgreich\x1b[0m erstellt: {0}",
        namespace_not_found: "\x1b[93mWarnung:\x1b[0m Namespace konnte nicht aus vorhandenen Dateien ermittelt werden. Verwende Standard '{0}'.",
    }
};

export function getMessages(): Messages {
    const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale.toLowerCase();
    
    // extract language code. eg: en-US -> en
    const languageCode = systemLocale.split('-')[0] as SupportedLanguage;
    
    // use default language as en.
    return messages[languageCode] || messages['en'];
}

export function formatMessage(message: string, ...args: string[]): string {
    return args.reduce((msg, arg, index) => {
        return msg.replace(`{${index}}`, arg);
    }, message);
}