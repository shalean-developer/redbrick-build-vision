"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
};

export function AuthorityImage({ src, alt, fallback, className }: Props) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
