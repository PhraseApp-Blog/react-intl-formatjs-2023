const { transform } = require("@formatjs/ts-transformer");
const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          getCustomTransformers() {
            return {
              before: [
                transform({
                  overrideIdFn: "[sha512:contenthash:base64:6]",
                }),
              ],
            };
          },
        },
      },
    ],
    exclude: /node_modules/,
  })
);
