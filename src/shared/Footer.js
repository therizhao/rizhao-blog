import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { breakpoints, media } from '../utils/helpers';
import styled from 'styled-components';

const LinksWrapper = styled.footer`
  margin-top: ${rhythm(2.5)};
  padding-top: ${rhythm(1)};
  color: var(--gray);

  ${media.greaterThan('lg')`
    padding-top: 5rem;
  `}

  ${media.lessThan('350px')`
    a {
      font-size: 1.3rem;
    }
  `}

  a {
    border-bottom: none;
    color: var(--gray);
    padding: 0 2px;
  }

  a:first-child {
    padding-left: 0;
  }

  a:hover {
    color: var(--black);
  }
`;

const Footer = ({ className, style }) => {
  return (
    <>
      <LinksWrapper className={className} style={style}>
        {typeof window !== `undefined` &&
          window.location.pathname !== '/contact' &&
          useMediaQuery(`(max-width: ${breakpoints.lg})`) && (
            <div style={{ float: 'right' }}>
              <Link to="/contact">Contact</Link>
            </div>
          )}
        <a
          href="https://github.com/therizhao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/wang-ri-zhao-413a75161/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.instagram.com/therizhao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </LinksWrapper>
      <div
        style={{ color: 'var(--gray)', fontSize: '1rem', paddingTop: '5rem' }}
      >
        &copy; {new Date().getFullYear()} Wang Ri Zhao, all rights reserved
      </div>
    </>
  );
};

export default Footer;
