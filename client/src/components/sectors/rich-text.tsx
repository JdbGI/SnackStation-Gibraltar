import { Fragment } from "react";

// Splitting on this leaves [text, label, href, text, label, href, ..., text].
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/;

/** Plain text with [link text](/path) links, for page copy kept in data files. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(new RegExp(LINK, "g"));
  const nodes = [];
  for (let i = 0; i < parts.length; i += 3) {
    nodes.push(<Fragment key={i}>{parts[i]}</Fragment>);
    if (i + 2 < parts.length) {
      nodes.push(
        <a
          key={`${i}-link`}
          href={parts[i + 2]}
          className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
        >
          {parts[i + 1]}
        </a>,
      );
    }
  }
  return <>{nodes}</>;
}
