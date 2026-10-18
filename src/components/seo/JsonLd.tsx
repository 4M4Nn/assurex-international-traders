interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/** Renders one JSON-LD graph. Pass several nodes as an array. */
export function JsonLd({ data }: JsonLdProps) {
  const graph = Array.isArray(data) ? data : [data];
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c",
  );
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
