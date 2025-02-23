import { db } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { registerSchema } from "./auth-schema";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerSchema)
    .query(async ({ input }) => {
      const user = await db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });
      return {
        success: true,
        message: `User ${user.name} registered!`,
      };
    })
});