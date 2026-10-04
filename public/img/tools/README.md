# Tool screenshots

Captured from the official public playgrounds on 2026-10-04, plus the Explorer
capture supplied by the user that day. These are actual
rendered views with vendor-neutral example input, entered through each
playground's Monaco editor model. UI labels were not replaced or fabricated.
The slides display selected sections so the text remains readable at 1280×720.

| Assets | Source playground | Input |
| --- | --- | --- |
| `explorer.png` | [ORD Explorer](https://open-resource-discovery.github.io/explorer/) | Built-in Sample ORD System; original user-supplied capture |
| `metadata-renderer.png` | [Metadata Renderer](https://open-resource-discovery.github.io/metadata-renderer/playground/) | [Orders OpenAPI](./examples/orders.openapi.json) |
| `a2a-header.png`, `a2a-skills.png` | [A2A Editor](https://open-resource-discovery.github.io/a2a-editor/playground/) | [Agent Card](./examples/agent.json) |
| `mcp-header.png`, `mcp-tools.png` | [MCP Server Card UI](https://open-resource-discovery.github.io/mcp-server-card-ui/playground/) | [Server Card](./examples/mcp.json) |

The A2A and MCP figures use two separate screenshot crops: the card header and
the skill/tool list. Connection settings and unrelated sections between them
are excluded. The captions identify these as detail views with example data.
The generic example endpoints are illustrative; no example agent task or MCP
tool was invoked. The MCP example passes the playground's card validation.

The Explorer image is copied unchanged. The slide displays the resource catalog
region through a CSS viewport and links to the complete image. Its sample data,
including vendor-specific IDs and the `Beta` release-status filter, is preserved
as shown in the real application.

The MCP Server Card is an open proposal, [SEP-2127](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127),
verified on the capture date. The example follows the current playground's
accepted representation; its `$schema` follows the playground's existing sample
convention. Playground validation is not a claim that the proposal is a released
MCP standard or that the base protocol schema defines Server Cards.

The tools are published under Apache-2.0 by their respective contributors.
Copyright and third-party notices are maintained in the upstream repositories:
[Metadata Renderer](https://github.com/open-resource-discovery/metadata-renderer),
[ORD Explorer](https://github.com/open-resource-discovery/explorer),
[A2A Editor](https://github.com/open-resource-discovery/a2a-editor), and
[MCP Server Card UI](https://github.com/open-resource-discovery/mcp-server-card-ui).
The license text is included in [LICENSE](./LICENSE).
