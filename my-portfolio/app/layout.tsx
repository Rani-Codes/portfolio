import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";

const libre = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rani Saro",
  description: "A portfolio site for rani saro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre.className}>{children}</body>
    </html>
  );
}
