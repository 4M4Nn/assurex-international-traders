import { ArticleCard } from "@/components/blog/ArticleCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getArticle } from "@/content/blog";
import type { Article } from "@/types";

interface RelatedArticlesProps {
  slugs: string[];
  heading?: string;
  eyebrow?: string;
}

export function RelatedArticles({ slugs, heading = "Related Buyer Guides", eyebrow = "Insights" }: RelatedArticlesProps) {
  const items = slugs.map(getArticle).filter((a): a is Article => Boolean(a));
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="related-articles" className="bg-champagne/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading id="related-articles" eyebrow={eyebrow} heading={heading} />
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {items.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
