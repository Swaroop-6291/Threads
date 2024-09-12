// route.ts or api/uploadthing/route.ts
import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Create route handlers for Next.js App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
