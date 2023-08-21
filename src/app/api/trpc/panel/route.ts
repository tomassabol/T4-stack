import { renderTrpcPanel } from "trpc-panel";
import { appRouter } from "~/server";

const handler = () => {
  return new Response(
    renderTrpcPanel(appRouter, {
      url:
        process.env.NODE_ENV + "/api/trpc" ?? "http://localhost:3000/api/trpc",
      transformer: "superjson",
    }),
    {
      headers: { "Content-Type": "text/html" },
    }
  );
};

export { handler as GET, handler as POST };
