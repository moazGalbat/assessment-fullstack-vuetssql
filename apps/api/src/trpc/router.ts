import { router } from "../trpc";

import { auth } from "./auth";
import { account } from "./account";
import { teams } from "./teams";
import { tasks } from "./tasks";

export const appRouter = router({
  auth,
  // protected
  account,
  teams,
  tasks,
});

export type AppRouter = typeof appRouter;
