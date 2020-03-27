import React from 'react';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import get from 'lodash/get';
import SEO from '../shared/SEO';
import Panel from '../shared/Panel';
import { formatPostDate, formatReadingTime, media } from '../utils/helpers';
import { rhythm, scale } from '../utils/typography';
import { Fade } from '@material-ui/core';

const Main = styled.main`
  ${media.greaterThan('lg')`
    margin-top: 11px;
  `}
`;

const Content = styled.div`
  .gatsby-resp-image-wrapper {
    margin-top: 2.5rem;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  table {
    max-width: 100vw;
    overflow: auto;
  }

  td,
  th {
    border-bottom: 1px solid var(--table-color);
  }

  .gatsby-resp-image-link:hover {
    border-bottom: none;
  }

  img {
    height: auto !important;
  }

  .caption p {
    display: block;
    color: var(--gray);
    font-size: 1.2rem;
    margin-top: -0.4rem;
  }
`;

const ScrollButton = styled(Fab)`
  &&& {
    position: fixed;
    background-color: var(--textLink);
    bottom: 20px;
    right: 3vw;

    ${media.greaterThan('850px')`
      bottom: 30px;
      right: 10%;
    `}

    ${media.greaterThan('1150px')`
      bottom: 40px;
      right: 20%;
    `}
  }
`;

const GITHUB_USERNAME = 'therizhao';
const GITHUB_REPO_NAME = 'rizhao-blog';
const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`;

class BlogPostTemplate extends React.Component {
  state = {
    isScrollButtonShown: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    this.setState({ isScrollButtonShown: window.scrollY > 100 });
  };

  renderScrollButton = () => {
    return (
      <Fade in={this.state.isScrollButtonShown}>
        <ScrollButton
          color="primary"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <UpIcon />
        </ScrollButton>
      </Fade>
    );
  };

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    let { previous, next, slug } = this.props.pageContext;

    return (
      <>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <Main>
          <article>
            <header>
              <h1
                style={{
                  color: 'var(--textTitle)',
                  marginBottom: '2rem',
                  lineHeight: '2.8rem',
                  marginTop: -13,
                }}
              >
                {post.frontmatter.title}
              </h1>
            </header>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
            {post.frontmatter.hasScrollButton && this.renderScrollButton()}
          </article>
        </Main>
        <aside
          style={{
            marginTop: '5rem',
          }}
        >
          <nav>
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                flexDirection: 'row-reverse',
                padding: 0,
                marginLeft: 0,
              }}
            >
              {[next, previous]
                .filter(item => !!item)
                .map((node, index) => (
                  <li key={node.frontmatter.title}>
                    <Link to={node.fields.slug}>
                      {index === 0
                        ? `${node.frontmatter.title} →`
                        : `← ${node.frontmatter.title}`}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </aside>
      </>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        hasScrollButton
      }
      fields {
        slug
      }
    }
  }
`;
