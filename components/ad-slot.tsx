import { adsenseClientId } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type AdSlotProps = {
  /** e.g. header-banner, in-article, sidebar-sticky — map to AdSense ad units */
  slotId: string;
  className?: string;
  /** Minimum height prevents CLS while ads load */
  minHeight?: number;
  label?: string;
};

/**
 * Placeholder for Google AdSense (or other) placements.
 * Replace inner markup with your approved AdSense snippet when ready.
 * @see https://support.google.com/adsense/answer/9274634
 */
export function AdSlot({
  slotId,
  className,
  minHeight = 250,
  label = "Advertisement",
}: AdSlotProps) {
  const client = adsenseClientId;

  return (
    <aside
      className={cn(
        "overflow-hidden rounded-lg border border-dashed border-border bg-muted/40",
        className,
      )}
      style={{ minHeight }}
      data-ad-slot={slotId}
      aria-label={label}
    >
      <div className="flex h-full min-h-[inherit] flex-col items-center justify-center gap-2 p-4 text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="max-w-xs text-xs text-muted-foreground">
          Ad slot <span className="font-mono text-foreground">{slotId}</span>
          <>
            {" "}
            · client{" "}
            <span className="font-mono text-foreground">{client}</span>
          </>
        </p>
        {/* 上线前：在 AdSense 后台创建广告单元后，填入 data-ad-slot 并取消注释 */}
        {/* <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot="YOUR_SLOT_ID"
          data-ad-format="auto"
          data-full-width-responsive="true"
        /> */}
      </div>
    </aside>
  );
}
