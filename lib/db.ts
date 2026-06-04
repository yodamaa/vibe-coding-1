import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

export async function connectDb() {
  await client.connect();
  const db = drizzle(client);
  return { db, client };
}
