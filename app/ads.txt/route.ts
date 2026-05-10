import { buildAdsTxtBody } from "@/lib/adsense-ads-txt";

export const dynamic = "force-static";

/**
 * 提供根路径 /ads.txt，供 AdSense 抓取与验证。
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
