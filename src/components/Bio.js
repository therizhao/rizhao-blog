import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <p style={{ maxWidth: 310, fontFamily: 'acumin-pro' }}>
          don't forget to dream 🌥
        </p>
      </div>
    );
  }
}

export default Bio;
