import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";

function HeaderFallback() {
  return (
    <header className="sticky top-0 z-50 min-h-[7.5rem] border-b border-border bg-background/95 backdrop-blur sm:min-h-[5rem]" />
  );
}

export function SiteHeaderShell() {
  return (
    <Suspense fallback={<HeaderFallback />}>
      <SiteHeader />
    </Suspense>
  );
}
