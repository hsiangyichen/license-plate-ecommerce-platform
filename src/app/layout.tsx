import { Footer, Navbar } from "@components";
import "./styles/global.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "218 Lucky Number",
  description: "A license plate ecommerce platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
