import { formatDate } from "@/components/blog/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Markdown } from "@/components/shared/Markdown";
import type { LegalPage } from "@/content/legal";
import { webPageSchema } from "@/lib/seo";

interface LegalPageViewProps {
  page: LegalPage;
  breadcrumbName: string;
}

export function LegalPageView({ page, breadcrumbName }: LegalPageViewProps) {
  return (
    <>
      <JsonLd data={webPageSchema({ path: page.path, name: page.seoTitle, description: page.metaDescription })} />
      <section className="bg-champagne">
        <div className="mx-auto max-w-4xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: breadcrumbName, path: page.path }]} />
          <h1 className="mt-10 text-[2.6rem] leading-[1.05] font-semibold text-forest sm:text-6xl">{page.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">{page.intro}</p>
          <p className="mt-4 text-sm text-slate-green">
            Last updated <time dateTime={page.updated}>{formatDate(page.updated)}</time>
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Markdown content={page.body} />
      </div>
    </>
  );
}
