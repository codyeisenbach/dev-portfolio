export default function robots() {
  const baseUrl = "https://www.codyeisenbach.com";

  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
