import { adsenseClientId } from "@/lib/site-config";
import { resolveAdsenseSlot } from "@/lib/adsense-slots";
import { cn } from "@/lib/utils";
import { AdsenseUnit } from "@/components/adsense-unit";

type AdSlotProps = {
  /** 逻辑位名称，用于查找环境变量里的真实 slot ID */
  slotId: string;
  className?: string;
  minHeight?: number;
  label?: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
};

/**
 * Google AdSense 展示位：需在 AdSense 创建广告单元，并在 .env.local 配置对应 NEXT_PUBLIC_ADSENSE_SLOT_*。
 * @see https://support.google.com/adsense/answer/9274634
 */
export function AdSlot({
  slotId,
  className,
  minHeight = 250,
  label = "广告",
  format = "auto",
}: AdSlotProps) {
  const client = adsenseClientId;
  const numericSlot = resolveAdsenseSlot(slotId);

  if (numericSlot) {
    return (
      <aside
        className={cn("overflow-hidden rounded-lg bg-muted/20", className)}
        style={{ minHeight }}
        aria-label={label}
      >
        <AdsenseUnit slot={numericSlot} format={format} />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "overflow-hidden rounded-lg border border-dashed border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20",
        className,
      )}
      style={{ minHeight }}
      data-ad-slot={slotId}
      aria-label={label}
    >
      <div className="flex h-full min-h-[inherit] flex-col items-center justify-center gap-2 p-4 text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}（未配置单元）
        </p>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          请在 AdSense 后台创建<strong>展示广告</strong>单元，复制<strong>广告单元 ID</strong>（一串数字），写入项目根目录{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[10px]">
            .env.local
          </code>
          ，例如：
        </p>
        <pre className="max-w-full overflow-x-auto rounded-md bg-muted p-2 text-left text-[10px] text-foreground">
          {`NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT=你的单元ID\n# 或为每位单独配置：\n# NEXT_PUBLIC_ADSENSE_SLOT_HEADER=...\n# NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_TOP=...`}
        </pre>
        <p className="max-w-md text-[11px] text-muted-foreground">
          当前逻辑位：<span className="font-mono text-foreground">{slotId}</span>
          {" · "}
          发布商：<span className="font-mono text-foreground">{client}</span>
        </p>
        <p className="max-w-md text-[11px] text-amber-800 dark:text-amber-200/90">
          提示：localhost 上 Google 常常不投放或仅空白；上线绑定域名并通过审核后更易看到广告。请关闭广告拦截扩展测试。
        </p>
      </div>
    </aside>
  );
}
