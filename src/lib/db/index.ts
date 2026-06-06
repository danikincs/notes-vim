import { schema } from "better-auth/client/plugins"
import { drizzle } from "drizzle-orm/singlestore/driver"
import postgres from "postgres"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error("DATABASE_URL is not set")
}

const client = postgres(connectionString)

export const db = drizzle(client, { schema })
