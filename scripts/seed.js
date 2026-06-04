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
    console.error('Seed failed', err);
    process.exit(1);
  } finally {
    await client.end();
  }
})();
