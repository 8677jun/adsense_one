import { buildAdsTxtBody } from "@/lib/adsense-ads-txt";

export const dynamic = "force-static";

/**
 * 提供根路径 /ads.txt（构建时的 adsenseClientId / NEXT_PUBLIC_ADSENSE_CLIENT）。
 * 注意：Next.js 禁止与 public/ads.txt 同时存在，否则会报 conflicting-public-file-page。
 * 若你必须用纯静态导出且无 Route，请删除本路由并改用单独的 public/ads.txt。
 * @see https://support.google.com/adsense/answer/7532444
 */
export function GET() {
  return new Response(buildAdsTxtBody(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
