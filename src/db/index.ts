import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "../../env.mjs";

neonConfig.fetchConnectionCache = true;

const conn = neon(env.DB!);
export const db = drizzle(conn);
