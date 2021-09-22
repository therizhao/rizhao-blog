module.exports = {
  siteMetadata: {
    title: `select * from life;`,
    author: 'Wang Ri Zhao',
    description: `kindness == love`,
    siteUrl: 'https://www.therizhao.com',
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                caption: {
                  classes: 'caption',
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: 'inline',
              footnoteBackRefDisplay: 'inline',
              footnoteBackRefInnerText: '^', // Defaults to: "↩"
              //use if you want the Wikipedia style ^ link without an underline beneath it
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              //use "front" for Wikipedia style ^ links
              footnoteBackRefInnerTextStartPosition: 'front',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-121115282-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wang Ri Zhao`,
        short_name: `therizhao`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/icon.svg`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-layout`,
  ],
};
