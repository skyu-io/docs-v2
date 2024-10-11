const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  pagesDir: 'pages/docs',
});

module.exports = withNextra({
  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io"],
  },
});
