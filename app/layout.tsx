import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentID",
  description:
    "One key. One phone. One inbox. One wallet. A framework-agnostic identity layer for AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
