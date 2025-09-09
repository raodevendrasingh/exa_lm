import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env.local", quiet: true, override: true });

const client = postgres(process.env.DATABASE_URL!);

export const db = drizzle({ client });

export type DB = typeof db;
