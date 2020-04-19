/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-react-helmet"],
  siteMetadata: {
    title: "Bots Against Humanity",
    titleTemplate: "%s · Artwork and More",
    description: "Artwork about bots fighting against humanity",
  },
}
