import { siteConfig } from "@/lib/site-config";
import type { Article } from "@/lib/articles";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  article,
  url,
}: {
  article: Article;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [article.coverImage],
    datePublished: `${article.publishedAt}T08:00:00+08:00`,
    dateModified: `${article.publishedAt}T08:00:00+08:00`,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.title,
      image: article.author.avatarUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: article.categorySlug,
    wordCount: article.body.join(" ").length,
    timeRequired: `PT${article.readTimeMinutes}M`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
