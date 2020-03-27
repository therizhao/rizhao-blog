import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { breakpoints, media } from '../utils/helpers';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: ${rhythm(2.5)};
  padding-top: ${rhythm(1)};
  color: var(--textGray);

  ${media.greaterThan('lg')`
    padding-top: 5rem;
  `}

  a {
    border-bottom: none;
    color: var(--textGray);
    padding: 0 2px;
  }

  a:first-child {
    padding-left: 0;
  }

  a:hover {
    color: var(--textNormal);
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      {useMediaQuery(`(max-width: ${breakpoints.lg})`) && (
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
    </Wrapper>
  );
};

export default Footer;
