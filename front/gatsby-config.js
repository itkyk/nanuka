const path = require("path");

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/createPages/`,
                include: ["**/*.js", "**/*.ts", "**/*.md"]
            }
        },
        {
            resolve: `gatsby-plugin-root-import`,
            options: {
                "@": path.join(__dirname, "src")
            }
        }
    ]
}