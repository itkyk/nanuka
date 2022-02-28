const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
console.log("env", process.env.ENABLE_GATSBY_REFRESH_ENDPOINT)

exports.onPostBuild = ({reporter}) => {
  reporter.info("Your Gatsby site has been built!")
}

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const blogPostTemplate = path.resolve("src/templates/pageInput.js");
  const result = await graphql(`
        query {
        allFile {
            edges {
              node {
                extension
                modifiedTime
                name
                relativePath
                absolutePath
              }
            }
          }
        }
    `)
  result.data.allFile.edges.forEach(edge => {
    const pageData = require(`./src/createPages/${edge.node.relativePath}`);
    const relativePath = edge.node.relativePath.replace("index", "").replace(".js", "")
    const pagePath = `/pages/${relativePath}`
    console.log("pageData: ", pageData[0].inputs[0].description, "\n", "pagePath: ", pagePath)
    createPage({
      path: pagePath,
      defer: true,
      component: blogPostTemplate,
      context: {
        dataFilePath: edge.node.relativePath
      }
    })
  })
}