import { Link, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { formatPostDate, formatReadingTime } from '../utils/helpers';
import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Panel from '../components/Panel';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';
import About from '../components/About';

const Tabs = styled.div`
  display: flex;
  margin-top: -20px;
  font-size: 20px;
  margin-bottom: -12px;
`;

const Tab = styled.div`
  font-weight: 700;
  font-family: Montserrat;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--textTitle);
  &:hover {
    color: var(--textLink);
    border-bottom: 2px solid var(--textLink);
    margin-bottom: -2px;
  }
  ${props =>
    props.isActive &&
    css`
      &&& {
        color: var(--textLink);
        border-bottom: 2px solid var(--textLink);
        margin-bottom: -2px;
      }
    `}
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

class BlogIndexTemplate extends React.PureComponent {
  postsTabMap = {
    1: 'modulePosts',
    2: 'blogPosts',
  };

  state = {
    tab: 0,
  };

  componentDidMount() {
    this.setState({ tab: +localStorage.getItem('tab') || 0 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tab !== this.state.tab) {
      localStorage.setItem('tab', this.state.tab);
    }
  }

  getPosts(postType) {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    return posts.filter(
      ({ node }) => node.fields.slug.split('/')[1] === postType
    );
  }

  renderPosts = posts => {
    return posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug;
      return (
        <Link
          style={{ boxShadow: 'none', color: 'inherit' }}
          to={node.fields.slug}
          rel="bookmark"
        >
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--postLink)',
                  fontSize: rhythm(1),
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {title}
              </h3>
              <small>
                {formatPostDate(node.frontmatter.date)}
                {` • ${formatReadingTime(node.timeToRead)}`}
              </small>
            </header>
            <p dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }} />
          </article>
        </Link>
      );
    });
  };

  handleTabChange = index => {
    this.setState({ tab: index });
  };

  render() {
    const { tab } = this.state;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <Tabs>
          {['about', 'modules', 'blog'].map((label, index) => {
            return (
              <Tab
                isActive={index === tab}
                onClick={() => this.handleTabChange(index)}
              >
                {label}
              </Tab>
            );
          })}
        </Tabs>
        <main>
          {tab === 0 ? (
            <About />
          ) : (
            this.renderPosts(this.getPosts(this.postsTabMap[tab]))
          )}
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
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
`;
