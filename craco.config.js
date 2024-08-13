const path = require("node:path");
const CracoLessPlugin = require("craco-less");
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://codercba.com:9002",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  webpack: {
    proxy: {},
    plugin: [{ plugin: CracoLessPlugin }],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
