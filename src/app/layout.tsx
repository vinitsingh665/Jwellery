import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lune | Jewelry & Beauty Essentials",
  description: "Trendy jewelry, hair accessories and cute essentials for your everyday glow.",
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
