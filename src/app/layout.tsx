import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loading from "@/components/layout/Loading";
import Error from "@/components/layout/Error";

const title = "Karşılığı ne? | Dolar Üzerinden Enflasyon Hesaplama Aracı";
const description =
  "Fiyatların bugünkü karşılıklarını hesaplayın. Dolar üzerinden geçmiş fiyatları güncel değerlere çevirin..";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://karsiligine.com.tr",
    siteName: "Karşılığı ne?",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Karşılığı ne?" },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
        <Error />
        <Loading />
      </body>
    </html>
  );
}
