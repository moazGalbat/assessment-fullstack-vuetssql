import { router } from "../trpc";

import { auth } from "./auth";
import { account } from "./account";
import { teams } from "./teams";

export const appRouter = router({
  auth,
  // protected
  account,
  teams,
});

export type AppRouter = typeof appRouter;
