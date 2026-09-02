import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syihabudin — Backend Engineer",
  description: "Portfolio of Syihabudin Rahmat Ramadhan, Backend Engineer."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
