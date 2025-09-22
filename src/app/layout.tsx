import { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";

const notoSans = Noto_Sans_KR({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inseong | info",
  description: "새로운 프로젝트를 확인해보세요.",
  authors: [{ name: "인성" }],
  applicationName: "인성 프로젝트 모음",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSans.className}>
      <body>{children}</body>
    </html>
  );
}
