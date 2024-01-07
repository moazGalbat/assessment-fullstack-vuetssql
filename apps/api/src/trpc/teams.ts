import { teamCreationRequestSchema } from "@mono/validation/lib/team";
import { router, protectedProcedure } from "../trpc";
import { db, schema } from "../db";

export const teams = router({
  myTeams: protectedProcedure.query(async ({ ctx: { user } }) => {
    const { userId } = user;
    const teams = await db.query.team.findMany({
      where: (team, { eq }) => {
        return eq(team.ownerId, userId);
      },
      columns: {
        id: true,
        name: true,
      },
    });
    return {
      teams,
    };
  }),
  add: protectedProcedure
    .input(teamCreationRequestSchema)
    .mutation(async ({ ctx: { user }, input }) => {
      const { userId } = user;
      const { name } = input;
      const [team] = await db
        .insert(schema.team)
        .values({
          name,
          ownerId: userId,
        })
        .returning();

      return {
        ...team,
      };
    }),
});
