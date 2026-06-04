# Setup Project: Next.js + TypeScript Stack

## Tujuan

Membuat project baru dengan Next.js, TypeScript, shadcn/ui, PostgreSQL, dan Drizzle ORM.

## Langkah-Langkah Implementasi (High-Level)

### 1. Inisialisasi Project

- Buat project Next.js baru dengan dukungan TypeScript
- Konfigurasi struktur project dengan folder organization yang tepat (app, components, lib, dll.)
- Setup ESLint dan Prettier untuk kualitas kode

### 2. Instalasi Dependencies

- Install Next.js dengan TypeScript
- Install library komponen shadcn/ui
- Install Drizzle ORM untuk manajemen database
- Install PostgreSQL driver (pg atau sejenisnya)
- Install utilities tambahan (tailwindcss untuk styling, dll.)

### 3. Setup Database

- Konfigurasi connection string PostgreSQL
- Buat schema dan migration Drizzle ORM
- Setup environment variables untuk kredensial database

### 4. Konfigurasi UI Components

- Setup library komponen shadcn/ui
- Konfigurasi Tailwind CSS untuk styling
- Buat struktur komponen dasar

### 5. Struktur Project

- Setup routing aplikasi (Next.js App Router)
- Buat layout page dasar
- Organisasikan komponen dan utilities

### 6. Testing & Verifikasi

- Verifikasi semua dependencies terinstal dengan baik
- Test koneksi database
- Pastikan UI components render dengan benar
- Build dan test project secara lokal

## Tech Stack

- **Framework:** Next.js 14+
- **Bahasa:** TypeScript
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Kualitas Kode:** ESLint, Prettier

## Catatan

- Ikuti best practices Next.js untuk struktur folder
- Gunakan TypeScript strict mode
- Implementasikan proper error handling dan validation
- Jaga database schema tetap terorganisir dan terdokumentasi
