import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";
import { ArticleJsonLd } from "@/components/json-ld";
import { AdSlot } from "@/components/ad-slot";
import { ArticleShare } from "@/components/article-share";
import { ArticleAuthor } from "@/components/article-author";
import { ArticleCard } from "@/components/article-card";

type ArticlePageProps = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  const url = `${siteConfig.url}/articles/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: `${article.publishedAt}T08:00:00+08:00`,
      authors: [article.author.name],
      images: [{ url: article.coverImage, alt: article.coverImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const url = `${siteConfig.url}/articles/${article.slug}`;
  let related = getRelatedArticles(article.slug, article.categorySlug, 4);
  if (related.length < 3) {
    const extra = articles.filter(
      (a) =>
        a.slug !== article.slug &&
        !related.some((r) => r.slug === a.slug),
    );
    related = [...related, ...extra].slice(0, 3);
  }

  const category = siteConfig.categories.find(
    (c) => c.slug === article.categorySlug,
  );

  const mid = Math.ceil(article.body.length / 2);
  const firstPart = article.body.slice(0, mid);
  const secondPart = article.body.slice(mid);

  return (
    <>
      <ArticleJsonLd article={article} url={url} />
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12">
        <nav className="text-sm text-muted-foreground" aria-label="面包屑">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-primary">
                首页
              </Link>
            </li>
            <li aria-hidden>/</li>
            {category ? (
              <>
                <li>
                  <Link
                    href={`/?category=${category.slug}`}
                    className="hover:text-primary"
                  >
                    {category.label}
                  </Link>
                </li>
                <li aria-hidden>/</li>
              </>
            ) : null}
            <li className="line-clamp-2 text-foreground">{article.title}</li>
          </ol>
        </nav>

        <div className="mt-8 flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,280px)] lg:items-start lg:gap-10 xl:gap-12">
          <article className="min-w-0">
            <header>
              {category ? (
                <p className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  {category.label}
                </p>
              ) : null}
              <h1 className="mt-3 text-balance text-[1.75rem] font-bold leading-tight tracking-tight text-foreground xs:text-3xl sm:mt-4 sm:text-4xl">
                {article.title}
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {article.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-border/80 pb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={article.author.avatarUrl}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full ring-2 ring-border"
                    priority
                  />
                  <div>
                    <p className="font-medium text-foreground">
                      {article.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {article.author.title}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" aria-hidden />
                    <time dateTime={article.publishedAt}>
                      {article.publishedAt}
                    </time>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" aria-hidden />
                    {article.readTimeMinutes} 分钟阅读
                  </span>
                </div>
              </div>
            </header>

            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border/80 shadow-md ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
              <Image
                src={article.coverImage}
                alt={article.coverImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 720px"
                priority
              />
            </figure>

            <div className="prose prose-neutral prose-lg mt-10 max-w-prose dark:prose-invert prose-headings:scroll-mt-28 prose-p:leading-relaxed prose-p:text-[1.05rem] lg:mx-auto">
              <h2 className="border-l-4 border-emerald-500 pl-4 text-xl font-semibold text-foreground">
                核心解读
              </h2>
              {firstPart.map((para, i) => (
                <p key={`f-${i}`}>{para}</p>
              ))}
            </div>

            <div className="my-10 max-w-prose lg:mx-auto">
              <AdSlot slotId="in-article-mid" minHeight={260} />
            </div>

            <div className="prose prose-neutral prose-lg max-w-prose dark:prose-invert prose-headings:scroll-mt-28 prose-p:leading-relaxed prose-p:text-[1.05rem] lg:mx-auto">
              <h2 className="border-l-4 border-emerald-500 pl-4 text-xl font-semibold text-foreground">
                延伸讨论
              </h2>
              {secondPart.map((para, i) => (
                <p key={`s-${i}`}>{para}</p>
              ))}
            </div>

            <div className="mt-12">
              <ArticleAuthor author={article.author} />
            </div>

            <section className="mt-14 border-t border-border/60 pt-12" aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                相关阅读
              </h2>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
                基于栏目与主题邻近性的推荐阅读，仍应以原始论文与临床医嘱为准。
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} headingLevel="h3" />
                ))}
              </div>
            </section>
          </article>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-[7.25rem] lg:gap-8">
            <div className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card dark:ring-white/[0.05] sm:p-6">
              <ArticleShare url={url} title={article.title} />
            </div>
            <AdSlot slotId="sidebar-article" minHeight={260} />
          </aside>
        </div>
      </div>
    </>
  );
}
