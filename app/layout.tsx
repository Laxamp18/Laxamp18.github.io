import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laxam Poudel — Engineering, systems & exploration",
  description:
    "The evolving engineering notebook of Laxam Poudel: computer science, systems, algorithms, web development and AI exploration.",
  metadataBase: new URL("https://laxam-poudel.com.np"),
  openGraph: {
    title: "Laxam Poudel — Engineering, systems & exploration",
    description:
      "A curious developer interested in how technology works beneath the surface.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
