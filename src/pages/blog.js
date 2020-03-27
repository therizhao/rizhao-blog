import { Link, graphql, useStaticQuery } from 'gatsby';
import { formatPostDate, formatReadingTime, media } from '../utils/helpers';
import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';

const BlogLink = styled(Link)`
  border-bottom: none;
  color: inherit;
  display: block;

  ${media.greaterThan('lg')`
    margin-bottom: 2.3rem;
  `}
  ${media.lessThan('lg')`
    margin-bottom: -2.3rem;
  `}
`;

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/blog/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            timeToRead
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              spoiler
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges.map(({ node }) => {
    const title = get(node, 'frontmatter.title') || node.fields.slug;
    return (
      <BlogLink key={node.fields.slug} to={node.fields.slug} rel="bookmark">
        <article key={node.fields.slug}>
          <header>
            <h2
              style={{
                fontFamily: '"Acumin Pro", sans-serif',
                color: 'var(--postLink)',
                marginBottom: '.5rem',
              }}
            >
              {title}
            </h2>
            <small
              style={{
                display: 'block',
                paddingBottom: '.3rem',
              }}
            >
              {formatPostDate(node.frontmatter.date)}
              <span
                style={{
                  paddingLeft: '0.5rem',
                  paddingRight: '0.2rem',
                }}
              >
                •
              </span>
              {formatReadingTime(node.timeToRead)}
            </small>
          </header>
          <p dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }} />
        </article>
      </BlogLink>
    );
  });
};

export default Blog;
