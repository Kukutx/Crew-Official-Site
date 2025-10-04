import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crew — 年轻人的自驾游活动 App",
  description:
    "Crew：基于地理位置的同城活动平台。发现活动、加入队伍、结识同好。iOS 与 Android 均可下载。",
  openGraph: {
    title: "Crew — 年轻人的同城活动 App",
    description:
      "发现活动、加入队伍、结识同好。iOS 与 Android 均可下载。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crew — 年轻人的同城活动 App",
    description:
      "发现活动、加入队伍、结识同好。iOS 与 Android 均可下载。",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6A00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
