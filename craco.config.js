const path = require("node:path");
const CracoLessPlugin = require("craco-less");
module.exports = {
  webpack: {
    plugin: [{ plugin: CracoLessPlugin }],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
