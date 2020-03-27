import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

const PageFooter = ({ to }) => (
  <Link
    style={{
      borderBottom: 'none',
      textDecoration: 'none',
      color: 'var(--textLink)',
      display: 'block',
      marginTop: '5rem',
      paddingTop: '1rem',
    }}
    to={to}
  >
    <h3
      style={{
        marginBottom: '0.8rem',
      }}
    >
      therizhao
    </h3>
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2),
      }}
    >
      <p style={{ maxWidth: 310 }}>don't forget to dream</p>
    </div>
  </Link>
);

export default PageFooter;
