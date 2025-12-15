# 🚀 Hızlı Kurulum Rehberi / Quick Setup Guide

Bu rehber, projeyi sıfırdan kurmanız için gereken tüm adımları içerir.

## 📋 Ön Gereksinimler / Prerequisites

- Node.js >= 16.0.0
- npm veya yarn
- Git (opsiyonel)
- Text editor (VS Code önerilir)

## ⚡ 5 Dakikada Kurulum / Setup in 5 Minutes

### 1️⃣ Proje Klasörünü Oluştur

```bash
mkdir fluent-migrator-cli
cd fluent-migrator-cli
```

### 2️⃣ NPM Projesini Başlat

```bash
npm init -y
```

### 3️⃣ TypeScript'i Yükle

```bash
npm install --save-dev typescript @types/node
```

### 4️⃣ Klasör Yapısını Oluştur

```bash
mkdir src
```

### 5️⃣ Dosyaları Oluştur

#### Linux/Mac:
```bash
touch src/index.ts
touch src/types.ts
touch src/messages.ts
touch src/utils.ts
touch src/migration.ts
touch tsconfig.json
touch .gitignore
touch .npmignore
touch README.md
touch LICENSE
touch CHANGELOG.md
```

#### Windows (PowerShell):
```powershell
New-Item -ItemType File -Path "src\index.ts"
New-Item -ItemType File -Path "src\types.ts"
New-Item -ItemType File -Path "src\messages.ts"
New-Item -ItemType File -Path "src\utils.ts"
New-Item -ItemType File -Path "src\migration.ts"
New-Item -ItemType File -Path "tsconfig.json"
New-Item -ItemType File -Path ".gitignore"
New-Item -ItemType File -Path ".npmignore"
New-Item -ItemType File -Path "README.md"
New-Item -ItemType File -Path "LICENSE"
New-Item -ItemType File -Path "CHANGELOG.md"
```

### 6️⃣ Dosya İçeriklerini Kopyala

Her dosyanın içeriğini Claude'un artifact'larından kopyala:

1. **src/index.ts** - Ana CLI entry point
2. **src/types.ts** - TypeScript interfaces
3. **src/messages.ts** - 5 dil mesajları
4. **src/utils.ts** - Utility fonksiyonlar
5. **src/migration.ts** - Migration oluşturma
6. **package.json** - Güncelle (aşağıda)
7. **tsconfig.json** - TypeScript config (aşağıda)
8. **.gitignore** - Git ignore (aşağıda)
9. **.npmignore** - NPM ignore (aşağıda)
10. **README.md** - Dokümantasyon (artifact'tan)
11. **LICENSE** - MIT License (artifact'tan)
12. **CHANGELOG.md** - Versiyon geçmişi (artifact'tan)

### 7️⃣ package.json'ı Güncelle

```json
{
  "name": "fluent-migrator-cli",
  "version": "1.0.0",
  "description": "CLI tool for generating FluentMigrator C# migration files with multi-language support",
  "main": "dist/index.js",
  "bin": {
    "fluent-migrator-cli": "dist/index.js",
    "fmcli": "dist/index.js"
  },
  "scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "prepublishOnly": "npm run build",
    "test": "node dist/index.js TestMigration",
    "clean": "rm -rf dist"
  },
  "keywords": [
    "migration",
    "fluentmigrator",
    "csharp",
    "database",
    "cli",
    "code-generator",
    "dotnet",
    "sql",
    "migration-tool",
    "multilingual"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/fluent-migrator-cli.git"
  },
  "engines": {
    "node": ">=16.0.0"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "devDependencies": {
    "typescript": "^5.3.3",
    "@types/node": "^20.10.5"
  }
}
```

### 8️⃣ tsconfig.json Oluştur

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 9️⃣ .gitignore Oluştur

```gitignore
# Node
node_modules/
npm-debug.log*

# TypeScript
dist/
*.tsbuildinfo

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Misc
.env
```

### 🔟 .npmignore Oluştur

```npmignore
src/
*.ts
!*.d.ts
tsconfig.json
.gitignore
.git/
node_modules/
test/
*.log
```

## 🏗️ Build ve Test

### Build
```bash
npm run build
```

### Local Test
```bash
# Global link oluştur
npm link

# Test dizinine git
cd ~/test-project

# Komutları test et
fmcli CreateUsersTable
fluent-migrator-cli AddEmailColumn
```

### Dil Testleri

```bash
# Fransızca test
LANG=fr_FR.UTF-8 fmcli CreateTable

# Almanca test
LANG=de_DE.UTF-8 fmcli CreateTable

# İtalyanca test
LANG=it_IT.UTF-8 fmcli CreateTable
```

## 🌐 Git ve GitHub

### Git Başlat

```bash
git init
git add .
git commit -m "Initial commit: Multi-language FluentMigrator CLI"
```

### GitHub Repository Oluştur

1. GitHub'da yeni repository oluştur
2. Repository'i bağla:

```bash
git remote add origin https://github.com/yourusername/fluent-migrator-cli.git
git branch -M main
git push -u origin main
```

## 📦 NPM'e Yayınla

### NPM Hesabı Oluştur

1. [npmjs.com](https://www.npmjs.com) adresinde hesap aç
2. Email'inizi doğrulayın

### Yayınlama

```bash
# NPM'e giriş yap
npm login

# Paket ismini kontrol et
npm search fluent-migrator-cli

# İlk yayın
npm publish
```

### Yeni Versiyon Yayınlama

```bash
# Patch version (1.0.0 -> 1.0.1)
npm version patch

# Minor version (1.0.1 -> 1.1.0)
npm version minor

# Major version (1.1.0 -> 2.0.0)
npm version major

# Yayınla
npm publish
```

## ✅ Checklist

Kurulum tamamlandığında:

- [ ] Tüm dosyalar oluşturuldu
- [ ] `npm install` çalıştırıldı
- [ ] `npm run build` başarılı
- [ ] `npm link` yapıldı
- [ ] Test komutları çalışıyor
- [ ] 5 dil için mesajlar doğru
- [ ] Git repository oluşturuldu
- [ ] GitHub'a push edildi
- [ ] package.json güncellendi
- [ ] README.md hazır
- [ ] LICENSE eklendi
- [ ] NPM'e yayınlandı

## 🎉 Tebrikler!

Projeniz artık kullanıma hazır! 

### Kullanım:
```bash
# Herhangi bir .NET projesinde
cd /path/to/your/dotnet/project
fmcli CreateUsersTable
```

## 🆘 Yardım

Sorun mu yaşıyorsunuz?

1. **Build hatası**: `npm run clean && npm run build`
2. **Link hatası**: `npm unlink && npm link`
3. **Permission hatası**: `sudo npm install -g fluent-migrator-cli`
4. **Dil algılama**: Sistem dilinizi kontrol edin

## 📚 Sonraki Adımlar

- [ ] Unit testler ekle
- [ ] GitHub Actions ekle
- [ ] NPM badge'leri ekle
- [ ] Social media'da paylaş
- [ ] Dokümantasyonu genişlet
- [ ] Video tutorial hazırla

---

**Başarılar! 🚀**