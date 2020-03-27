import React from 'react';
import styled from 'styled-components';
import { phoneNumber } from '../utils/constants';
import { media } from '../utils/helpers';

const Wrapper = styled.div`
  p {
    margin-bottom: 0rem;
    ${media.greaterThan('lg')`
      margin-bottom: 0.5rem;
    `}
  }
`;

const Contact = () => (
  <Wrapper>
    <h1>Always open 🙆‍♂️</h1>
    <div>
      <p>Have a great idea?</p>
      <p>Want to work with me on a project?</p>
      <p>Or just looking for a nice coffee chat?</p>
    </div>
    <h2>Feel free to contact me.</h2>
    <a href={`https://wa.me/65${phoneNumber}`}>Click here to WhatsApp me 👈</a>
    <h3>Other ways to reach me:</h3>
    <p>
      <strong>Email</strong>:{' '}
      <a href="mailto:rizhaow@gmail.com?Subject=Hello">rizhaow@gmail.com</a>
    </p>
    <p>
      <strong>Phone</strong>: +65 {phoneNumber}
    </p>
  </Wrapper>
);

export default Contact;
