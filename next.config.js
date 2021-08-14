const generateSitemap = require("./scripts/generate-sitemap");
const generateFeed = require("./scripts/generate-rss");
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap();
      generateFeed();
    }
    return config;
  },
};
