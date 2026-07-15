import { defineTool } from "@lovable.dev/mcp-js";
import { contactInfo } from "../articles";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Return contact information for Kênia Garcia Advocacia: practice areas, WhatsApp, Instagram, and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contactInfo, null, 2) }],
    structuredContent: contactInfo,
  }),
});
