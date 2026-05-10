"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [status, setStatus] = React.useState<"idle" | "done">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Input
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        autoComplete="email"
        aria-label="电子邮箱"
      />
      <Button type="submit" className="w-full">
        订阅简报
      </Button>
      {status === "done" ? (
        <p className="text-xs text-muted-foreground" role="status">
          感谢订阅！此为演示表单，请接入您的邮件服务提供商。
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">
          每周精选研究与合规提示，可随时退订。
        </p>
      )}
    </form>
  );
}
