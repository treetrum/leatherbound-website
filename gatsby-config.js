module.exports = {
    siteMetadata: {
        title: `Leatherbound`,
        description: `Track your books, beautifully.`,
        author: `@treetrum`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Leatherbound`,
                short_name: `leatherbound`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
    ],
};
