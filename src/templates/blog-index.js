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

const DescWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: -4px;
  p:first-child {
    line-height: 1.5;
  }
  p {
    margin-bottom: 10px;
  }
`;

const Tabs = styled.div`
  display: flex;
  margin-top: -20px;
  font-size: 20px;
  margin-bottom: -12px;
`;

const Tab = styled.div`
  font-weight: 700;
  font-family: acumin-pro;
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
        margin-bottom: -2px;
        border-bottom: ${props.isHideActiveBorder
          ? 'none'
          : '2px solid var(--textLink)'};
      }
    `}
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

class BlogIndexTemplate extends React.PureComponent {
  state = {
    tab: 0,
    modulesTab: 0,
  };

  componentDidMount() {
    this.setState({
      tab: +localStorage.getItem('tab') || 0,
      modulesTab: +localStorage.getItem('modulesTab') || 0,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tab !== this.state.tab) {
      localStorage.setItem('tab', this.state.tab);
    }

    if (prevState.modulesTab !== this.state.modulesTab) {
      localStorage.setItem('modulesTab', this.state.modulesTab);
    }
  }

  getPosts(postType) {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    return posts.filter(
      ({ node }) => node.fields.slug.split('/')[1] === postType
    );
  }

  handleTabChange = index => {
    this.setState({ tab: index });
  };

  handleModulesTabChange = index => {
    this.setState({ modulesTab: index });
  };

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
                  fontFamily: 'acumin-pro, sans-serif',
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

  renderModulesContent = () => {
    const { modulesTab } = this.state;

    if (modulesTab === 0) {
      return (
        <>
          <DescWrapper>
            <p>
              Here are the strange projects I am working on in{' '}
              <a href="http://did.nus.edu.sg/">NUS Industrial Design</a>.
            </p>
            <p>
              I am using the Agile workflow to tackle this craziness. (
              <a
                href="https://trello.com/b/RwV4sYGv/ri-zhaos-nus-id-projects"
                target="_blank"
              >
                Trello Board 👈
              </a>
              )
            </p>
          </DescWrapper>
          {this.renderPosts(this.getPosts('module-posts'))}
        </>
      );
    }

    return (
      <>
        <DescWrapper>
          <p>I get bored during lessons. Hence, I take notes.</p>
        </DescWrapper>
        {this.renderPosts(this.getPosts('notes'))}
      </>
    );
  };

  renderModules = () => {
    const { modulesTab } = this.state;

    return (
      <div style={{ marginTop: 40 }}>
        <div style={{ marginBottom: 40 }}>
          This is where I document about all the modules I am taking/have taken
          in NUS.
        </div>
        <Tabs>
          {['projects', 'notes'].map((label, index) => {
            return (
              <Tab
                style={{ fontSize: 17, boxShadow: 'none' }}
                isActive={index === modulesTab}
                onClick={() => this.handleModulesTabChange(index)}
              >
                {label}
              </Tab>
            );
          })}
        </Tabs>
        <div>{this.renderModulesContent()}</div>
      </div>
    );
  };

  renderContent = () => {
    const { tab } = this.state;

    if (tab === 0) {
      return <About />;
    }

    if (tab === 1) {
      return this.renderModules();
    }

    return this.renderPosts(this.getPosts('blog-posts'));
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
        <main>{this.renderContent()}</main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
