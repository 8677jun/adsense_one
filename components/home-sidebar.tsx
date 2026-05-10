import Link from "next/link";
import { TrendingUp } from "lucide-react";
import type { Article } from "@/lib/articles";
import { AdSlot } from "@/components/ad-slot";
import { NewsletterForm } from "@/components/newsletter-form";

type HomeSidebarProps = {
  popular: Article[];
};

export function HomeSidebar({ popular }: HomeSidebarProps) {
  return (
    <aside className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-6 lg:mt-0 lg:flex lg:max-w-none lg:flex-col lg:gap-8 lg:self-start lg:sticky lg:top-[7.25rem]">
      <section aria-labelledby="sidebar-ads-heading" className="md:col-span-2 lg:col-span-1">
        <h2 id="sidebar-ads-heading" className="sr-only">
          赞助商内容区域
        </h2>
        <AdSlot slotId="sidebar-sticky-top" minHeight={260} />
      </section>

      <section
        className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card dark:ring-white/[0.05] sm:p-6"
        aria-labelledby="popular-heading"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="h-5 w-5" aria-hidden />
          </span>
          <h2
            id="popular-heading"
            className="text-base font-semibold tracking-tight text-card-foreground sm:text-lg"
          >
            热门文章
          </h2>
        </div>
        <ol className="space-y-4">
          {popular.map((article, index) => (
            <li key={article.slug} className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium leading-snug text-card-foreground sm:text-[0.9375rem]">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="rounded-sm hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:text-emerald-400"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  <time dateTime={article.publishedAt}>{article.publishedAt}</time>
                  {" · "}
                  {article.readTimeMinutes} 分钟
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card dark:ring-white/[0.05] sm:p-6"
        aria-labelledby="newsletter-heading"
      >
        <h2
          id="newsletter-heading"
          className="text-base font-semibold tracking-tight text-card-foreground sm:text-lg"
        >
          邮件订阅
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          获取 longevity 与精准医疗领域的周报摘要（演示）。
        </p>
        <div className="mt-4">
          <NewsletterForm />
        </div>
      </section>

      <div className="md:col-span-2 lg:col-span-1">
        <AdSlot slotId="sidebar-secondary" minHeight={180} />
      </div>
    </aside>
  );
}
