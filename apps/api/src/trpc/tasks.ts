import {
  taskPerTeamRequestSchema,
  taskCreationRequestSchema,
} from "@mono/validation/lib/task";
import { router, protectedProcedure } from "../trpc";
import { db, schema } from "../db";

export const tasks = router({
  myTasksPerTeam: protectedProcedure
    .input(taskPerTeamRequestSchema)
    .query(async ({ ctx: { user }, input }) => {
      const { userId } = user;
      const { teamId, limit = 10, page = 1 } = input;
      const offset = (page - 1) * limit;
      const tasks = await db.query.task.findMany({
        where: (task, { eq, and }) => {
          return and(eq(task.teamId, teamId), eq(task.userId, userId));
        },
        limit,
        offset,
      });
      return {
        tasks,
      };
    }),
  add: protectedProcedure
    .input(taskCreationRequestSchema)
    .mutation(async ({ ctx: { user }, input }) => {
      const { userId } = user;
      const { description, teamId } = input;
      const [task] = await db
        .insert(schema.task)
        .values({
          description,
          teamId,
          userId,
        })
        .returning();

      return {
        ...task,
      };
    }),
});
