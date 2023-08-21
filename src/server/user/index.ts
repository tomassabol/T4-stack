import { db } from "~/db";
import { publicProcedure, router } from "../trpc";
import { users } from "~/db/schema";

export const userRouter = router({
  user: publicProcedure.query(async () => {
    return "user from tRPC";
  }),
  getUsers: publicProcedure.query(async () => {
    const usersRes = await db.select().from(users);
    return usersRes;
  }),
});
