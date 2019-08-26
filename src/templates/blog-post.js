import React from 'react';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import get from 'lodash/get';
import '../fonts/fonts-post.css';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Signup from '../components/Signup';
import Panel from '../components/Panel';
import { formatPostDate, formatReadingTime, media } from '../utils/helpers';
import { rhythm, scale } from '../utils/typography';
import {
  codeToLanguage,
  createLanguageLink,
  loadFontsForCode,
} from '../utils/i18n';
import { Fade } from '@material-ui/core';

const Content = styled.div`
  .gatsby-resp-image-wrapper {
    min-width: 400px !important;
    max-width: 400px !important;
    margin: 40px 0 !important;
  }

  ${media.lessThan('420px')`
    .gatsby-resp-image-wrapper {
      min-width: 80vw !important;
      max-width: 80vw !important;
    }
  `}

  table {
    max-width: 100vw;
    overflow: auto;
  }

  td,
  th {
    border-bottom: 1px solid var(--table-color);
  }

  .gatsby-resp-image-link:hover {
    box-shadow: none;
  }

  img {
    height: auto !important;
    border-radius: 10px !important;
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
    let {
      previous,
      next,
      slug,
      translations,
      translatedLinks,
    } = this.props.pageContext;
    const lang = post.fields.langKey;

    // Replace original links with translated when available.
    let html = post.html;
    translatedLinks.forEach(link => {
      // jeez
      function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
      let translatedLink = '/' + lang + link;
      html = html.replace(
        new RegExp('"' + escapeRegExp(link) + '"', 'g'),
        '"' + translatedLink + '"'
      );
    });

    translations = translations.slice();
    translations.sort((a, b) => {
      return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1;
    });

    loadFontsForCode(lang);
    // TODO: this curried function is annoying
    const languageLink = createLanguageLink(slug, lang);
    const enSlug = languageLink('en');
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${enSlug.slice(
      1,
      enSlug.length - 1
    )}/index.md`;
    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://overreacted.io${enSlug}`
    )}`;

    return (
      <Layout location={this.props.location} title={`< ${siteTitle}`}>
        <SEO
          lang={lang}
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <main>
          <article>
            <header>
              <h1
                style={{
                  color: 'var(--textTitle)',
                  fontSize: 35,
                  marginBottom: 40,
                  marginTop: -13,
                }}
              >
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: 'block',
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-4 / 5),
                }}
              >
                {formatPostDate(post.frontmatter.date, lang)}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </p>
            </header>
            <Content dangerouslySetInnerHTML={{ __html: html }} />
            {this.renderScrollButton()}
          </article>
        </main>
        <aside>
          <div
            style={{
              margin: '90px 0 40px 0',
              fontFamily: systemFont,
            }}
          />
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: rhythm(0.25),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'var(--textLink)',
              }}
              to={'/'}
            >
              therizhao
            </Link>
          </h3>
          <Bio />
          <nav>
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    style={{ marginRight: 20 }}
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </aside>
      </Layout>
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
      }
      fields {
        slug
        langKey
      }
    }
  }
`;
