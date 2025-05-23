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
      }}
    >
      <p style={{ maxWidth: 310 }}>Living in the moment!</p>
    </div>
  </Link>
);

export default PageFooter;
