import type { Metadata } from "next";
import {
  filterArticles,
  getFeaturedArticle,
  getPopularArticles,
} from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";
import { HeroFeatured } from "@/components/hero-featured";
import { ArticleCard } from "@/components/article-card";
import { HomeSidebar } from "@/components/home-sidebar";

export const metadata: Metadata = {
  title: "首页",
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

type HomePageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function HomePage({ searchParams }: HomePageProps) {
  const q = typeof searchParams.q === "string" ? searchParams.q : undefined;
  const category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;

  const featured = getFeaturedArticle();
  const filtered = filterArticles(q, category);
  const showHero = !q && !category;

  const gridArticles = showHero
    ? filtered.filter((a) => a.slug !== featured.slug)
    : filtered;

  const popular = getPopularArticles(4);

  const filterHeading = q
    ? `「${q}」的搜索结果`
    : `${siteConfig.categories.find((c) => c.slug === category)?.label ?? "栏目"} 文章`;

  return (
    <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12">
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:items-start lg:gap-10 xl:gap-12">
        <div className="min-w-0 space-y-10 sm:space-y-12">
          {showHero ? (
            <HeroFeatured article={featured} />
          ) : (
            <header className="space-y-2 rounded-2xl border border-border/60 bg-card/40 p-5 shadow-sm backdrop-blur-sm sm:p-6">
              <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {filterHeading}
              </h1>
              <p className="text-sm text-muted-foreground sm:text-base">
                {gridArticles.length} 篇符合条件的文章
              </p>
            </header>
          )}

          <section aria-labelledby="latest-heading">
            <div className="flex flex-col gap-3 border-l-4 border-emerald-500 pl-4 sm:pl-5">
              <h2
                id="latest-heading"
                className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                {showHero ? "最新深度稿件" : "文章列表"}
              </h2>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                聚焦同行评议研究、监管动向与可复核数据源；不构成个体化医疗建议。
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-8">
              {gridArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            {gridArticles.length === 0 ? (
              <p className="mt-8 text-sm text-muted-foreground">
                没有找到文章，试试其它关键词或清除筛选条件。
              </p>
            ) : null}
          </section>
        </div>

        <HomeSidebar popular={popular} />
      </div>
    </div>
  );
}
