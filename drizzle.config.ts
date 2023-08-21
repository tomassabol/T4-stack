import type { Config } from "drizzle-kit";
import "dotenv/config";
import { env } from "./env.mjs";

console.log(env.DB!);
export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DB!,
    ssl: true,
  },
  breakpoints: true,
} satisfies Config;
