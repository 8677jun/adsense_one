/**
 * 将页面上的逻辑广告位名称映射到 AdSense 后台「广告单元」的数字 ID（data-ad-slot）。
 * 在 .env.local 中配置 NEXT_PUBLIC_ADSENSE_SLOT_*（见下方键名）。
 * 若只配置 NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT，则所有位置会先尝试用该 ID（测试用；正式站建议每位独立单元）。
 */
const SLOT_ENV_KEYS: Record<string, string> = {
  "header-leaderboard": "NEXT_PUBLIC_ADSENSE_SLOT_HEADER",
  "sidebar-sticky-top": "NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_TOP",
  "sidebar-secondary": "NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_SECONDARY",
  "in-article-mid": "NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE",
  "sidebar-article": "NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_ARTICLE",
};

function readPublicEnv(name: string): string | undefined {
  const raw =
    typeof process !== "undefined"
      ? (process.env as Record<string, string | undefined>)[name]
      : undefined;
  const v = raw?.trim();
  return v || undefined;
}

export function resolveAdsenseSlot(logicalSlotId: string): string | undefined {
  const envName = SLOT_ENV_KEYS[logicalSlotId];
  if (envName) {
    const specific = readPublicEnv(envName);
    if (specific) return specific;
  }
  return readPublicEnv("NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT");
}
