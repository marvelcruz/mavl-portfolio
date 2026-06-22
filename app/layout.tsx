import type { Metadata, Viewport } from "next";
import { montserrat, noto_sans, rubik } from "./styles/fonts";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marvellous Olabode | Business Operations & Growth Systems Specialist",
  description:
    "Portfolio of Marvellous Olabode, a Business Operations and Growth Systems Specialist focused on CRM administration, workflow automation, marketing operations, website operations, event systems, and remote business support.",
  keywords: [
    "Marvellous Olabode",
    "Business Operations Specialist",
    "Growth Systems Specialist",
    "Marketing Operations Specialist",
    "CRM Administrator",
    "Workflow Automation",
    "GoHighLevel",
    "Zapier",
    "Website Operations",
    "Digital Operations",
    "Remote Operations",
    "Event Systems",
  ],
  authors: [{ name: "Marvellous Olabode" }],
  creator: "Marvellous Olabode",
  icons: {
    icon: "/icons/logo.ico",
  },
  openGraph: {
    title: "Marvellous Olabode | Business Operations & Growth Systems Specialist",
    description:
      "CRM, workflow automation, website operations, marketing operations, event systems, and remote business support.",
    type: "website",
    locale: "en_US",
    siteName: "Marvellous Olabode Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvellous Olabode | Business Operations & Growth Systems Specialist",
    description:
      "CRM, workflow automation, website operations, marketing operations, event systems, and remote business support.",
  },
};

export const viewport: Viewport = {
  themeColor: "#B88700",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${noto_sans.variable} ${rubik.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
