"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdSlot } from "@/components/ad-slot";

export function SiteHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";

  function onSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const q = String(fd.get("q") ?? "").trim();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (q) params.set("q", q);
    router.push(`/?${params.toString()}`);
  }

  const searchField = (
    <>
      <div className="relative min-w-0 flex-1">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          name="q"
          type="search"
          placeholder="搜索文章…"
          defaultValue={searchParams.get("q") ?? ""}
          className="w-full pl-9"
          aria-label="搜索文章"
          autoComplete="off"
          enterKeyHint="search"
        />
      </div>
      <Button
        type="submit"
        variant="secondary"
        className="hidden shrink-0 sm:inline-flex"
      >
        搜索
      </Button>
      <Button
        type="submit"
        variant="secondary"
        size="icon"
        className="sm:hidden tap-target shrink-0"
        aria-label="搜索"
      >
        <Search className="h-5 w-5" aria-hidden />
      </Button>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:gap-4 lg:gap-6">
          <div className="flex items-center justify-between md:contents">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2 text-base font-semibold tracking-tight text-foreground xs:text-lg"
            >
              <span className="hidden xs:inline">{siteConfig.name}</span>
              <span className="xs:hidden">BHI</span>
            </Link>
            <div className="md:hidden">
              <ModeToggle />
            </div>
          </div>

          <nav
            className="hidden flex-1 flex-wrap items-center gap-1 md:flex lg:gap-1.5"
            aria-label="分类导航"
          >
            <Link
              href="/"
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                !category ? "bg-accent text-accent-foreground" : ""
              }`}
            >
              全部
            </Link>
            {siteConfig.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/?category=${cat.slug}`}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  category === cat.slug
                    ? "bg-accent text-accent-foreground"
                    : ""
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </nav>

          <form
            onSubmit={onSearch}
            className="flex w-full min-w-0 items-center gap-2 md:max-w-md md:flex-1 lg:max-w-lg"
            role="search"
          >
            {searchField}
          </form>

          <div className="hidden shrink-0 md:flex">
            <ModeToggle />
          </div>
        </div>

        <nav
          className="scrollbar-none flex gap-2 overflow-x-auto pb-3 [-webkit-overflow-scrolling:touch] md:hidden"
          aria-label="分类导航（移动）"
        >
          <Link
            href="/"
            className={`tap-target inline-flex shrink-0 snap-start items-center rounded-full px-4 text-sm font-medium ${
              !category
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground"
            }`}
          >
            全部
          </Link>
          {siteConfig.categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/?category=${cat.slug}`}
              className={`tap-target inline-flex shrink-0 snap-start items-center rounded-full px-4 text-sm font-medium ${
                category === cat.slug
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border/60 bg-muted/25">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
          <AdSlot
            slotId="header-leaderboard"
            minHeight={90}
            format="horizontal"
          />
        </div>
      </div>
    </header>
  );
}
