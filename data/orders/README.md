# Orders teaching example

These fictional endpoints describe one Orders API and its Order Entity Type. The
walkthrough uses short excerpts; **Full JSON** downloads the complete fixtures.
The Configuration and ORD document are validated against the source schemas in
`ord-spec/spec/v1/` at release **1.16.4**. The document's version field is
`"1.16"`, as required by the schema.

- Replace the placeholder vendor namespace `foo` with your registered namespace.
  Products and Vendors use it alone: `foo:product:Orders:` and
  `foo:vendor:Example:`. Their version fragments are empty.
- Resource and Package IDs use the system namespace `foo.orders` and a major
  version. Every reference resolves to an entry in the complete document.
- The full fixtures use the `system-type` perspective, which is included in
  1.16.4 with beta status. They contain no tenant-specific metadata.
- Metadata links resolve against `https://orders.example.com`; the API's OpenAPI
  server is `https://orders.example.com/api/v1`. These URLs are illustrative.
  The slide's document and definition links advance the bundled walkthrough.

The optional live reference application is a separate example.
It declares its own ORD version and is requested only after selecting **Try live demo**.
Its root page embeds ORD Explorer for public system-version metadata and demo-authenticated system-instance metadata.
A failed or timed-out request returns to the Orders teaching example.
