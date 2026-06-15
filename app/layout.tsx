import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quickbite.ng"),
  title: "QuickBite — Fast. Fresh. Delivered.",
  description:
    "Order jollof, grills, swallow and more from top restaurants across Nigeria. Fast delivery, live tracking, and easy payments with Paystack.",
  keywords: [
    "food delivery Nigeria",
    "order food Lagos",
    "QuickBite",
    "jollof delivery",
    "restaurant delivery",
  ],
  openGraph: {
    title: "QuickBite — Fast. Fresh. Delivered.",
    description:
      "Order from your favourite spots across Nigeria, delivered to your door in minutes. Pay easily with Paystack.",
    type: "website",
    locale: "en_NG",
    siteName: "QuickBite",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickBite — Fast. Fresh. Delivered.",
    description:
      "Order from your favourite spots across Nigeria, delivered to your door in minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
