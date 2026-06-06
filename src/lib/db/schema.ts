import { relations } from "drizzle-orm"
import { pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const folders = pgTable("folders", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    userId: text("user_id").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const notes = pgTable("notes", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    folderId: text("folder_id")
        .notNull()
        .references(() => folders.id, { onDelete: "cascade" }),
    userId: text("user_id").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const foldersRelations = relations(folders, ({ many }) => ({
    notes: many(notes),
}))

export const notesRelations = relations(notes, ({ one }) => ({
    folder: one(folders, {
        fields: [notes.folderId],
        references: [folders.id],
    }),
}))
