const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');

    // Sections to show
    const SECTIONS = ['blog', 'designs', 'modules'];

    SECTIONS.forEach(section => {
      resolve(
        graphql(
          `
            {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fields: { slug: { regex: "/${section}/" } } }
                limit: 1000
              ) {
                edges {
                  node {
                    fields {
                      slug
                      directoryName
                      maybeAbsoluteLinks
                    }
                    frontmatter {
                      title
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
            return;
          }

          const posts = result.data.allMarkdownRemark.edges;

          _.each(posts, (post, index) => {
            const previous =
              index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;

            createPage({
              path: post.node.fields.slug,
              component: blogPost,
              context: {
                slug: post.node.fields.slug,
                previous,
                next,
              },
            });
          });
        })
      );
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (_.get(node, 'internal.type') === `MarkdownRemark`) {
    const fileAbsolutePath = _.get(node, 'fileAbsolutePath');

    createNodeField({
      node,
      name: 'directoryName',
      value: path.basename(path.dirname(fileAbsolutePath)),
    });

    const slug =
      '/' +
      path.basename(path.dirname(path.dirname(fileAbsolutePath))) +
      '/' +
      node.frontmatter.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^a-z0-9\-]+/g, '');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    const markdown = node.internal.content;
    let maybeAbsoluteLinks = [];
    let linkRe = /\]\((\/[^\)]+\/)\)/g;
    let match = linkRe.exec(markdown);
    while (match != null) {
      maybeAbsoluteLinks.push(match[1]);
      match = linkRe.exec(markdown);
    }
    createNodeField({
      node,
      name: 'maybeAbsoluteLinks',
      value: _.uniq(maybeAbsoluteLinks),
    });
  }
};
