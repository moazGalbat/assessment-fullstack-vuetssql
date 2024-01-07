import {
  uuid,
  text,
  timestamp,
  pgTable,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  hashedPassword: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  emailVerified: timestamp("email_verified"),
});

export const emailChangeRequest = pgTable("email_change_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  newEmail: text("new_email").notNull(),
  otpCode: text("otp_code").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const emailVerification = pgTable("email_verifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  email: text("email").notNull(),
  otpCode: text("otp_code").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  attempts: integer("attempts").default(0).notNull(),
});

export const passwordResetRequest = pgTable("password_reset_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  token: text("token").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const team = pgTable("teams", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  ownerId: uuid("owner_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const task = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  description: text("description").notNull(),
  completed: boolean("completed").default(false),
  teamId: uuid("team_id")
    .unique()
    .notNull()
    .references(() => team.id, { onDelete: "cascade" }),
  userId: uuid("user_id").references(() => user.id, { onDelete: "set null" }),
});
