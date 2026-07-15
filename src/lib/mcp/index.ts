import { defineMcp } from "@lovable.dev/mcp-js";
import listArticles from "./tools/list-articles";
import getArticle from "./tools/get-article";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "kenia-garcia-advocacia-mcp",
  title: "Kênia Garcia Advocacia",
  version: "0.1.0",
  instructions:
    "Public MCP server for Kênia Garcia Advocacia. Use `list_articles` to browse published legal articles on Brazilian family and succession law, `get_article` to get the URL for a specific article by slug (fetch the URL to read the content), and `get_contact_info` for practice areas and contact channels.",
  tools: [listArticles, getArticle, getContactInfo],
});
