import React from 'react';
import { Link } from 'gatsby';
import Toggle from '../shared/Toggle';
import Helmet from 'react-helmet';
import { rhythm, scale } from '../utils/typography';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import PostLayout from './PostLayout';
import IndexLayout from './IndexLayout';
import DesktopLayout from './DesktopLayout';
import { media, breakpoints } from '../utils/helpers';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Layout = ({ location, children }) => {
  const renderContent = () => {
    const rootPath = `${__PATH_PREFIX__}/`;

    if (location.pathname.split('/').length - 1 === 1) {
      return <IndexLayout>{children}</IndexLayout>;
    }
    return <PostLayout location={location}>{children}</PostLayout>;
  };

  if (useMediaQuery(`(min-width: ${breakpoints.lg})`)) {
    return <DesktopLayout>{children}</DesktopLayout>;
  }

  return (
    <div
      style={{
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh',
      }}
    >
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: '#fff',
          },
        ]}
      />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `2.625rem 2rem`,
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Layout;
