import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal Markdown renderer for the site's structured content files.
 * Supports ## / ### headings, paragraphs, - and 1. lists, > notes, pipe
 * tables, **bold** and [links](/path/). Internal links use next/link.
 */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractHeadings(md: string, level: 2 | 3 = 2) {
  const marker = level === 2 ? /^##\s+(.+)$/ : /^###\s+(.+)$/;
  return md
    .split("\n")
    .map((l) => l.trim().match(marker))
    .filter((m): m is RegExpMatchArray => Boolean(m))
    .map((m) => ({ text: m[1].trim(), id: slugify(m[1]) }));
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*\s][^*]*)\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] && match[2]) {
      const href = match[2];
      const key = `${keyPrefix}-l${i++}`;
      if (href.startsWith("/")) {
        nodes.push(
          <Link key={key} href={href}>
            {match[1]}
          </Link>,
        );
      } else if (href.startsWith("#")) {
        nodes.push(
          <a key={key} href={href}>
            {match[1]}
          </a>,
        );
      } else {
        nodes.push(
          <a key={key} href={href} target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>,
        );
      }
    } else if (match[3]) {
      nodes.push(<strong key={`${keyPrefix}-b${i++}`}>{match[3]}</strong>);
    } else if (match[4]) {
      nodes.push(<em key={`${keyPrefix}-i${i++}`}>{match[4]}</em>);
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

type Block =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul" | "ol" | "quote"; items: string[] }
  | { type: "table"; rows: string[][] };

function parse(md: string): Block[] {
  const lines = md.replace(/\r/g, "").split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i++;
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }
    if (line.startsWith(">")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        items.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", items });
      continue;
    }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const raw = lines[i].trim();
        if (!/^\|[\s:-]+\|/.test(raw) || /[a-z0-9]/i.test(raw)) {
          rows.push(
            raw
              .replace(/^\||\|$/g, "")
              .split("|")
              .map((c) => c.trim()),
          );
        }
        i++;
      }
      blocks.push({ type: "table", rows });
      continue;
    }
    const para: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,3}\s|[-*]\s|\d+\.\s|>|\|)/.test(lines[i].trim())
    ) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }
  return blocks;
}

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps) {
  const blocks = parse(content);
  return (
    <div className={cn("prose-assurex", className)}>
      {blocks.map((block, idx) => {
        const key = `b${idx}`;
        switch (block.type) {
          case "h2":
            return (
              <h2 key={key} id={slugify(block.text)}>
                {renderInline(block.text, key)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} id={slugify(block.text)}>
                {renderInline(block.text, key)}
              </h3>
            );
          case "ul":
            return (
              <ul key={key}>
                {block.items.map((item, j) => (
                  <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key}>
                {block.items.map((item, j) => (
                  <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={key}>
                {block.items.map((item, j) => (
                  <p key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</p>
                ))}
              </blockquote>
            );
          case "table": {
            const [head, ...body] = block.rows;
            return (
              <div key={key} className="-mx-1 overflow-x-auto px-1">
                <table>
                  <thead>
                    <tr>
                      {head.map((cell, j) => (
                        <th key={`${key}-h${j}`} scope="col">
                          {renderInline(cell, `${key}-h${j}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {body.map((row, r) => (
                      <tr key={`${key}-r${r}`}>
                        {row.map((cell, j) => (
                          <td key={`${key}-r${r}-${j}`}>{renderInline(cell, `${key}-r${r}-${j}`)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          default:
            return <p key={key}>{renderInline(block.text, key)}</p>;
        }
      })}
    </div>
  );
}
