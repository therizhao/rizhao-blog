import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="https://wa.me/6582186566"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact me
          </a>
        </div>
        <a
          href="https://github.com/therizhao"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/wang-ri-zhao-413a75161/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </footer>
    );
  }
}

export default Footer;
