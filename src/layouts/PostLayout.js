import React from 'react';
import { Link } from 'gatsby';
import PageFooter from '../shared/PageFooter';

// Where to head back to given the current pathname
const BACK_LINKS = {
  '/modules': '/designs',
  '/designs': '/designs',
  '/blog': '/blog',
};

const PostLayout = ({ children, location }) => {
  const backTo =
    BACK_LINKS[
      Object.keys(BACK_LINKS).find(path => location.pathname.includes(path))
    ];

  return (
    <>
      <h3
        style={{
          marginTop: 0,
          marginBottom: 0,
          height: 42,
          lineHeight: '2.625rem',
        }}
      >
        <Link
          style={{
            borderBottom: 'none',
            textDecoration: 'none',
            color: 'var(--textLink)',
          }}
          to={backTo}
        >
          &lt; therizhao
        </Link>
      </h3>
      <main style={{ marginTop: '3rem' }}>{children}</main>
      <PageFooter to={backTo} />
    </>
  );
};

export default PostLayout;
