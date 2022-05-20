const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss";
        `,
      },
    },
  },
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080, // CHANGE YOUR PORT HERE!
    https: true,
    // hotOnly: false,
  },
});
