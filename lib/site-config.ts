/** Google AdSense 发布商 ID（ca-pub-…）。可用环境变量 NEXT_PUBLIC_ADSENSE_CLIENT 覆盖。 */
export const adsenseClientId =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() ||
  "ca-pub-5980383899853782";

export const siteConfig = {
  name: "BioHealth Insights",
  description:
    "前沿生物技术、健康长寿、精准医疗与生物黑客领域的深度解读与可靠资讯。",
  /** Used for metadataBase and JSON-LD; override in production via env */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://biohealthinsights.example.com",
  twitterHandle: "@BioHealthInsights",
  categories: [
    { slug: "biotechnology", label: "生物技术" },
    { slug: "longevity", label: "健康长寿" },
    { slug: "precision-medicine", label: "精准医疗" },
    { slug: "biohacking", label: "生物黑客" },
  ] as const,
};
