import type { MetadataRoute } from "next";

const baseUrl = "https://mavl-portfolio-wg6f.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    ...["/work/bni-operations", "/work/cosmo", "/work/skye", "/work/fitlunge", "/regional-os-demo"].map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
