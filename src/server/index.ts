import { router } from "./trpc";
import { greetingRouter } from "./greeting";
import { userRouter } from "./user";

export const appRouter = router({
  greeting: greetingRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
