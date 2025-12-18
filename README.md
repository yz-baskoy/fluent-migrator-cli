# fluent-migrator-cli

A modular CLI tool for generating FluentMigrator C# migration files with multi-language support.

## Features

-  **Automatic Timestamp** - Unique timestamp for each migration
-  **Namespace Detection** - Automatically detects namespace from existing files
-  **5 Language Support** - 🇬🇧 English, 🇹🇷 Turkish, 🇫🇷 French, 🇮🇹 Italian, 🇩🇪 German
-  **Modular Structure** - Easy to maintain and extensible code
-  **Smart Warnings** - Duplicate and future-dated file checks
-  **Colored Output** - Readable colored messages in terminal
-  **Global Command** - Use from any directory
-  **Two Commands** - `fluent-migrator-cli` or short `fmcli`

## Supported Languages

| Language | Code | System Examples |
|----------|------|-----------------|
| 🇬🇧 English | `en` | en-US, en-GB, en-CA, en-AU |
| 🇹🇷 Turkish | `tr` | tr-TR |
| 🇫🇷 French | `fr` | fr-FR, fr-BE, fr-CA, fr-CH |
| 🇮🇹 Italian | `it` | it-IT, it-CH |
| 🇩🇪 German | `de` | de-DE, de-AT, de-CH |

**Your system language is automatically detected!**

## Installation

### From Source (Currently Available)

```bash
# Clone the repository
git clone https://github.com/yourusername/fluent-migrator-cli.git
cd fluent-migrator-cli

# Install dependencies
npm install

# Build the project
npm run build

# Link globally
npm link

# Test it
fmcli CreateUsersTable
```

## Usage Examples

### Basic Usage

```bash
# Create tables
fmcli CreateUsersTable

```

### Language Examples

```bash
# 🇬🇧 English (en-US)
$ fmcli CreateTable
Migration file successfully created: /path/to/Migrations/20241216153045_CreateTable.cs
```


## Generated File

When you run the command, a file is created in the `Migrations` folder with this format:

```csharp
using FluentMigrator;

namespace YourProject.Database.Migrations;

[Migration(20241216153045)]
public class _20241216153045_CreateUsersTable : Migration
{
    public override void Up()
    {
        // Your migration code
    }

    public override void Down()
    {
        // Your rollback code
    }
}
```

## Project Structure

```
your-dotnet-project/
├── Migrations/
│   ├── 20241216143052_CreateUsersTable.cs
│   ├── 20241216143153_AddEmailToUsers.cs
│   └── 20241216143254_CreateEmailIndex.cs
├── YourProject.csproj
└── package.json
```

### Automatic Namespace Detection

After creating your first migration, edit the namespace:

```csharp
// First file: 20241201120000_Initial.cs
namespace MyCompany.Project.Database.Migrations;  // Edit this

// All subsequent migrations will automatically use the same namespace
```


## Migration Naming Tips

### Good Examples
```bash
fmcli CreateUsersTable
fmcli AddEmailToUsers
fmcli CreateEmailIndex
fmcli UpdateUserStatusColumn
```