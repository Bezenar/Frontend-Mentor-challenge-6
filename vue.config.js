// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: [
//           `@import "./public/scss/html-coding/_colors.scss";`,
//           `@import "./public/scss/html-coding/_widths.scss";`
//         ]
//       }
//     }
//   }
// };
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "./public/scss/html-coding/_colors.scss";
        @import "./public/scss/html-coding/_resp.scss";
        @import "./public/scss/html-coding/_widths.scss";
        @import "./public/scss/html-coding/_flex.scss";
        `
      }
    }
  }
};
