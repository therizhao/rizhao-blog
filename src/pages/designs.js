import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Caption = styled.p`
  font-size: 1.3rem;
  margin-top: 1.2rem;
  padding-left: 0.3rem;
  color: var(--textGray);
`;

const Designs = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/designs/" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges.map(({ node }) => (
    <Link
      key={node.fields.slug}
      style={{
        borderBottom: 'none',
        color: 'inherit',
        paddingBottom: '1.3rem',
        display: 'block',
      }}
      to={node.fields.slug}
      rel="bookmark"
    >
      <Img
        fluid={node.frontmatter.image.childImageSharp.fluid}
        alt={node.frontmatter.title}
      />
      <Caption>{node.frontmatter.title}</Caption>
    </Link>
  ));
};

export default Designs;
