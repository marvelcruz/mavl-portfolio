import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://mavl-portfolio-wg6f.vercel.app/sitemap.xml",
  };
}
