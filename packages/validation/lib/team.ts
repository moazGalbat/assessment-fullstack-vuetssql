import { object, string } from "zod";
import type { z } from "zod";

export const teamCreationRequestSchema = object({
  name: string().min(4),
});
export type TeamCreationRequestSchemaType = z.infer<
  typeof teamCreationRequestSchema
>;
