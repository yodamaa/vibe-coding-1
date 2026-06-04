import { NextResponse } from "next/server";
import { Client } from "pg";

export async function GET() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return NextResponse.json({ users: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }] });
  }

  const client = new Client({ connectionString });
  try {
    await client.connect();
    const res = await client.query("SELECT id, name FROM users ORDER BY id LIMIT 100");
    await client.end();
    return NextResponse.json({ users: res.rows });
  } catch (err) {
    try {
      await client.end();
    } catch (e) {
      // ignore
    }
    return NextResponse.json({ users: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }] }, { status: 200 });
  }
}
