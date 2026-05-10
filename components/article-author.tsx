import Image from "next/image";
import type { Author } from "@/lib/articles";

export function ArticleAuthor({ author }: { author: Author }) {
  return (
    <section
      className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card dark:ring-white/[0.05] sm:p-7"
      aria-labelledby="about-author-heading"
    >
      <h2
        id="about-author-heading"
        className="text-lg font-semibold text-card-foreground"
      >
        关于作者
      </h2>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
        <Image
          src={author.avatarUrl}
          alt=""
          width={72}
          height={72}
          className="rounded-full object-cover ring-2 ring-border"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-card-foreground">{author.name}</p>
          <p className="mt-1 text-sm text-primary">{author.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {author.bio}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            作者简介用于强化专业性与透明度（E-E-A-T）。本站编辑独立于广告主。
          </p>
        </div>
      </div>
    </section>
  );
}
