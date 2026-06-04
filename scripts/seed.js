const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/vibe_coding_db';

(async () => {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    await client.query(`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT NOT NULL);`);
    await client.query(`INSERT INTO users (name) VALUES ('Alice'), ('Bob'), ('Charlie') ON CONFLICT DO NOTHING;`);
    console.log('Seeded users');
  } catch (err) {
    console.error('Seed failed', err.message || err);
    if (err.code === '28000' || /role ".+" does not exist/.test(String(err.message))) {
      console.error('\nKemungkinan penyebab: role (user) atau kredensial di `DATABASE_URL` tidak cocok dengan server PostgreSQL Anda.');
      console.error('Solusi cepat: jalankan perintah psql berikut (butuh akses superuser postgres):');
      console.error("psql -U postgres -c \"CREATE ROLE user WITH LOGIN PASSWORD 'password';\"");
      console.error("psql -U postgres -c \"CREATE DATABASE vibe_coding_db OWNER user;\"");
      console.error('\nAtau ubah `DATABASE_URL` di environment menjadi kredensial yang valid, contohnya:');
      console.error('DATABASE_URL=postgres://postgres:yourpassword@localhost:5432/vibe_coding_db');
    }
    process.exit(1);
  } finally {
    await client.end();
  }
})();
