import type { Metadata } from "next";
import "./globals.css";
import { GlobalNav } from "@/ui/global-nav";
import { Footer } from "@/ui/footer";
import DarkMode from "@/app/useDarkMode";

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
      <body>
        <DarkMode>
          <GlobalNav />
          {children}
          <Footer />  
        </DarkMode>     
      </body>
    </html>
  );
}
