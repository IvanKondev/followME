import { generateLocalBusinessSchema } from "@/lib/schema"

export function SchemaMarkup() {
  const schema = generateLocalBusinessSchema()

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
