import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-muted/50 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {siteConfig.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              栏目
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {siteConfig.categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/?category=${c.slug}`}
                    className="-mx-1 inline-flex min-h-[44px] items-center rounded-md px-1 py-2 hover:text-primary sm:min-h-0 sm:py-1"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              合规与联系
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#medical-disclaimer" className="hover:text-primary">
                  医疗免责声明
                </Link>
              </li>
              <li>
                <span>编辑信箱：</span>
                <a
                  href="mailto:editor@biohealthinsights.example.com"
                  className="hover:text-primary"
                >
                  editor@biohealthinsights.example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section
          id="medical-disclaimer"
          className="mt-12 rounded-2xl border-2 border-amber-500/60 bg-amber-50 p-5 shadow-sm dark:border-amber-400/50 dark:bg-amber-950/40 sm:p-7"
          aria-labelledby="disclaimer-title"
        >
          <h2
            id="disclaimer-title"
            className="text-base font-bold text-amber-950 dark:text-amber-100"
          >
            医疗免责声明（Medical Disclaimer）
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-amber-950/90 dark:text-amber-50/90">
            {siteConfig.name}
            发布的资讯与解读仅供教育与一般信息目的，不构成医疗建议、诊断或治疗方案。个体健康状况因人而异；任何医疗决策请咨询合格执业医师或相关专业人员。我们不保证内容的完整性、时效性或适用于您的具体情况。使用本站信息的风险由读者自行承担。
          </p>
        </section>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {year} {siteConfig.name}. 保留所有权利。
        </p>
      </div>
    </footer>
  );
}
