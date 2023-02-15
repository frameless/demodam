/* eslint-env node */
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `demodam2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: process.env.BASE_URL ?? "/",
  plugins: [],
};
