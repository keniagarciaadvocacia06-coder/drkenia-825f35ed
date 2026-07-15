import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { articles, SITE_URL } from "../articles";

export default defineTool({
  name: "list_articles",
  title: "List articles",
  description: "List all published legal articles from Kênia Garcia Advocacia (Brazilian family and succession law). Returns titles, slugs, descriptions and URLs.",
  inputSchema: {
    search: z.string().optional().describe("Optional case-insensitive substring to filter articles by title or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ search }) => {
    const q = (search ?? "").trim().toLowerCase();
    const items = articles
      .filter((a) => !q || a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q))
      .map((a) => ({ ...a, url: `${SITE_URL}/artigos/${a.slug}` }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { articles: items, count: items.length },
    };
  },
});
