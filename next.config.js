const generateSitemap = require("./scripts/generate-sitemap");
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap();
    }
    return config;
  },
};
