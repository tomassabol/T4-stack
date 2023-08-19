import { renderTrpcPanel } from "trpc-panel";
import { appRouter } from "~/server/routers/_app";

const panelHandler = () => {
  return new Response(
    renderTrpcPanel(appRouter, {
      url: "http://localhost:3000/api/trpc",
      transformer: "superjson",
    }),
    {
      headers: { "Content-Type": "text/html" },
    }
  );
};

export { panelHandler as GET, panelHandler as POST };
