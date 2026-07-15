import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { articles, SITE_URL } from "../articles";

export default defineTool({
  name: "get_article",
  title: "Get article",
  description: "Return metadata and the public URL for a specific article by its slug. Fetch the URL to read the full content.",
  inputSchema: {
    slug: z.string().min(1).describe("Article slug, e.g. 'divorcio-online'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const article = articles.find((a) => a.slug === slug);
    if (!article) {
      return {
        content: [{ type: "text", text: `Article not found: ${slug}` }],
        isError: true,
      };
    }
    const result = { ...article, url: `${SITE_URL}/artigos/${slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
