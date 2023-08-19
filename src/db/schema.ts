// schema
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

/**
 * This is a sample schema.
 * Replace this with your own schema.
 */

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});
export type User = InferModel<typeof users>;
