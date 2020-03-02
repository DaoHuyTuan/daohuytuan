const path = require('path')
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const withImages = require("next-images");
module.exports = withImages({
  inlineImageLimit: 16384,
  webpack(config, options) {
    return config;
  }
});
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  /* config options here */
});
module.exports = withBundleAnalyzer({});

const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require("mdx-prism")]
  }
});


module.exports = withMDX({
  target: "serverless",
  pageExtensions: ["js", "jsx", "mdx", "md"],
  webpack: (config, { defaultLoaders, isServer, dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
      module: "empty"
    };
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      Components: path.resolve("./components"),
      Atoms: path.resolve("./components/atoms"),
      Containers: path.resolve("./components/containers"),
      Theme: path.resolve("./theme/")
    });
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require("styled-jsx/webpack").loader,
            options: {
              type: "global"
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 9999999,
            name: "[name].[ext]"
          }
        }
      }
    );

    if (isServer && !dev) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
        entries["./posts/rss-feed.js"] = "./posts/rss-feed.js";
        return entries;
      };
    }
    return config;
  }
});
