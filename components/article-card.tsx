import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import type { Article } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  headingLevel?: "h2" | "h3";
  className?: string;
};

export function ArticleCard({
  article,
  headingLevel = "h3",
  className,
}: ArticleCardProps) {
  const TitleTag = headingLevel;
  const category = siteConfig.categories.find(
    (c) => c.slug === article.categorySlug,
  );

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:ring-white/[0.06]",
        className,
      )}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="relative aspect-[16/10] overflow-hidden"
      >
        <Image
          src={article.coverImage}
          alt={article.coverImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 380px"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
        {category ? (
          <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
            {category.label}
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <TitleTag className="text-[1.05rem] font-semibold leading-snug tracking-tight text-card-foreground sm:text-lg">
          <Link
            href={`/articles/${article.slug}`}
            className="hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:hover:text-emerald-400"
          >
            {article.title}
          </Link>
        </TitleTag>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
          {article.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border/70 pt-4">
          <div className="flex items-center gap-2">
            <Image
              src={article.author.avatarUrl}
              alt=""
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-background"
              loading="lazy"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-card-foreground">
                {article.author.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {article.author.title}
              </p>
            </div>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {article.readTimeMinutes} 分钟
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <time dateTime={article.publishedAt}>
                {article.publishedAt}
              </time>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
