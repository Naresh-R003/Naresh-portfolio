"use client";

import { usePathname } from "next/navigation";
import SmoothScrollProvider from "./SmoothScrollProvider";

export default function SmoothScrollGate({ children, smooth, anchorOffset }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/projects")) {
    return children;
  }

  return (
    <SmoothScrollProvider smooth={smooth} anchorOffset={anchorOffset}>
      {children}
    </SmoothScrollProvider>
  );
}

