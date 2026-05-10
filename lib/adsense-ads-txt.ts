import { adsenseClientId } from "@/lib/site-config";

/** ca-pub-xxx → ads.txt 所需的 pub-xxx */
export function adsensePublisherForAdsTxt(clientId: string = adsenseClientId): string {
  const t = clientId.trim();
  if (t.toLowerCase().startsWith("ca-")) return t.slice(3);
  return t;
}

/** Google AdSense 标准一行（TAG ID 为 Google 官方固定值） */
export function buildAdsTxtBody(): string {
  const pub = adsensePublisherForAdsTxt();
  return `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`;
}
