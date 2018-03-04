module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Dimension by HTML5 UP",
    author: "RenateWRavnaas",
    description: "A Gatsby.js Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId: `zysy44islyfs`,
          accessToken: `e5a7ac785052c6089044743d608d4f53567d3c84bfc90584335266392ac16b5a`,
      },
  },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
