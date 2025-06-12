import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const coffeeRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.coffee.findMany({
      orderBy: { name: "asc" },
    });
  }),
});