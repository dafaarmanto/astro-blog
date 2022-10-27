import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Dafa Armanto | Blog",
    description: "My journey learning Astro",
    site: "https://example.com",
    items: import.meta.glob("./**/*.md"),
    customData: "<language>en-us</language>",
  });
