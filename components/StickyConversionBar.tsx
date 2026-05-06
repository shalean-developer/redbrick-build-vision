"use client";

import Link from "next/link";
import { MessageCircle, ClipboardList } from "lucide-react";
import { whatsappQuoteUrl } from "@/lib/contact";

export function StickyConversionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] border-t bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      role="region"
      aria-label="Quick contact"
    >
      <div className="container mx-auto flex items-center justify-center gap-3 px-4 py-3">
        <Link
          href="/contact"
          className="inline-flex flex-1 max-w-xs items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          <ClipboardList className="h-4 w-4 shrink-0" aria-hidden />
          Request quote
        </Link>
        <a
          href={whatsappQuoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 max-w-xs items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
