import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { Article } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroFeaturedProps = {
  article: Article;
};

export function HeroFeatured({ article }: HeroFeaturedProps) {
  const category = siteConfig.categories.find(
    (c) => c.slug === article.categorySlug,
  );

  return (
    <section
      className="relative isolate overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl ring-1 ring-black/5 dark:ring-white/10 sm:rounded-3xl"
      aria-labelledby="hero-heading"
    >
      <div className="relative min-h-[70vh] sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src={article.coverImage}
          alt={article.coverImageAlt}
          fill
          priority
          fetchPriority="high"
          className="object-cover sm:object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/60 to-[#0F172A]/25 sm:via-[#0F172A]/55"
          aria-hidden
        />
        <div className="relative flex min-h-[70vh] flex-col justify-end p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:min-h-[420px] sm:p-8 sm:pb-8 md:p-10 lg:min-h-[480px]">
          {category ? (
            <p className="mb-3 inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm">
              {category.label}
            </p>
          ) : null}
          <h1
            id="hero-heading"
            className="max-w-4xl text-balance text-[1.65rem] font-bold leading-tight tracking-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl"
          >
            {article.title}
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-100/90 sm:mt-4 sm:text-lg">
            {article.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-slate-200 sm:mt-6">
            <span className="inline-flex items-center gap-2">
              <Image
                src={article.author.avatarUrl}
                alt=""
                width={36}
                height={36}
                className="rounded-full ring-2 ring-white/30"
                priority
              />
              <span>
                <span className="font-medium text-white">
                  {article.author.name}
                </span>
                <span className="hidden sm:inline"> · </span>
                <span className="block text-xs text-slate-300 sm:inline sm:text-sm">
                  {article.author.title}
                </span>
              </span>
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden />
            <span className="inline-flex items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden />
                {article.readTimeMinutes} 分钟阅读
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden />
                <time dateTime={article.publishedAt}>
                  {article.publishedAt}
                </time>
              </span>
            </span>
          </div>
          <div className="mt-6 sm:mt-8">
            <Link
              href={`/articles/${article.slug}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "inline-flex w-full justify-center bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-600 sm:w-auto",
              )}
            >
              阅读深度解读
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
