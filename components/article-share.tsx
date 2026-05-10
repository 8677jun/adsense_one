"use client";

import { Link2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ArticleShareProps = {
  url: string;
  title: string;
};

export function ArticleShare({ url, title }: ArticleShareProps) {
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  const links = [
    {
      name: "发布到 X（Twitter）",
      short: "X",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`,
    },
    {
      name: "分享到 LinkedIn",
      short: "in",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    },
    {
      name: "分享到 Facebook",
      short: "f",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* noop */
    }
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-card-foreground">分享本文</p>
      <div className="flex flex-wrap gap-2">
        {links.map(({ name, short, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            aria-label={name}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "font-semibold tracking-tight",
            )}
          >
            <span aria-hidden>{short}</span>
          </a>
        ))}
        <button
          type="button"
          title="复制链接"
          aria-label="复制本文链接"
          onClick={copyLink}
          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
        >
          <Link2 className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
