import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loading from "@/components/layout/Loading";
import Error from "@/components/layout/Error";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
