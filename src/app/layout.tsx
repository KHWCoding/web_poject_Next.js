import type { Metadata } from "next";
import "./globals.css";
import { GlobalNav } from "@/ui/global-nav";
import { Footer } from "@/ui/footer";

export const metadata: Metadata = {
  title: '대한민국 멸종위기 생물',
  description: 'Next.js를 활용한 웹 구현',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="bg-white min-h-screen">
        <GlobalNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
