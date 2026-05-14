import { pgTable, serial, text, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  location: text("location").notNull(),
  year: text("year").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  images: jsonb("images").notNull().$type<string[]>().default([]),
  services: jsonb("services").notNull().$type<string[]>(),
  stats: jsonb("stats").notNull().$type<Record<string, string>>(),
  highlights: jsonb("highlights").notNull().$type<string[]>(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
