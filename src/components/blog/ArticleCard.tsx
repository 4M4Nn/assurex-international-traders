import Image from "next/image";
import Link from "next/link";
import { getCategory, readingMinutes } from "@/content/blog";
import { cn } from "@/lib/utils";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
  headingLevel?: "h2" | "h3";
  className?: string;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function ArticleCard({ article, headingLevel = "h3", className }: ArticleCardProps) {
  const Heading = headingLevel;
  const category = getCategory(article.category);
  return (
    <article data-reveal className={cn("group relative flex flex-col border-t-2 border-gold bg-white", className)}>
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-gold-ink uppercase">
          {category?.name} · {readingMinutes(article)} min read
        </p>
        <Heading className="mt-3 text-[1.55rem] leading-snug font-semibold text-forest">
          <Link href={`/blog/${article.slug}/`} className="after:absolute after:inset-0 group-hover:text-emerald-deep">
            {article.title}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-green">{article.excerpt}</p>
        <p className="mt-5 text-xs text-slate-green">
          <time dateTime={article.published}>{formatDate(article.published)}</time>
        </p>
      </div>
    </article>
  );
}
