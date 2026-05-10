"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { adsenseClientId } from "@/lib/site-config";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdsenseUnitProps = {
  slot: string;
  /** 横幅位常用 horizontal；正文/侧栏多用 auto */
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
  fullWidthResponsive?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function AdsenseUnit({
  slot,
  format = "auto",
  fullWidthResponsive = true,
  className,
  style,
}: AdsenseUnitProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!slot || initialized.current) return;
    initialized.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("[AdSense] push failed:", e);
    }
  }, [slot]);

  return (
    <ins
      className={`adsbygoogle ${className ?? ""}`}
      style={{ display: "block", ...style }}
      data-ad-client={adsenseClientId}
      data-ad-slot={slot}
      data-ad-format={format}
      {...(fullWidthResponsive ? { "data-full-width-responsive": "true" } : {})}
    />
  );
}
