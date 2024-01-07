import { object, string, number } from "zod";
import type { z } from "zod";

export const taskPerTeamRequestSchema = object({
  teamId: string(),
  limit: number().int().optional(),
  page: number().int().optional(),
});
export type TaskPerTeamRequestSchema = z.infer<typeof taskPerTeamRequestSchema>;

export const taskCreationRequestSchema = object({
  description: string().min(8),
  teamId: string(),
});
export type TaskCreationRequestSchema = z.infer<
  typeof taskCreationRequestSchema
>;
