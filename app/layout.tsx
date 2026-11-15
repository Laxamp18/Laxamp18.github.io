import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laxam Poudel | Developer Portfolio",
  description: "Portfolio of Laxam Poudel — Computer Engineering Student and Aspiring Developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}