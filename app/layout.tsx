import type { Metadata, Viewport } from "next";
import { montserrat, noto_sans, rubik } from "./styles/fonts";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mavl-portfolio-wg6f.vercel.app"),
  title: "Marvellous Olabode | Digital Experiences, Revenue Operations & Systems",
  description:
    "Marvellous Olabode designs digital experiences and builds the CRM, automation, revenue operations, and business systems behind them. Explore live builds, case studies, and operating-system work.",
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
  alternates: { canonical: "/" },
  icons: {
    icon: "/icons/logo.ico",
  },
  openGraph: {
    title: "Marvellous Olabode | Digital Experiences & Revenue Operations",
    description:
      "CRM, workflow automation, website operations, marketing operations, event systems, and remote business support.",
    type: "website",
    locale: "en_US",
    siteName: "Marvellous Olabode Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvellous Olabode | Revenue Operations & CRM Automation",
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
