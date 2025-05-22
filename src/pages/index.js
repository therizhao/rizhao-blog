import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/helpers';
import resume from '../assets/RI_ZHAO_WANG-RESUME.pdf';
import Seo from '../shared/Seo';
import { Link } from 'gatsby';

const AboutWrapper = styled.div`
  ${media.greaterThan('lg')` 
    h1 {
      margin-top: 0;
    }
  `}

  &&& h2 {
    margin-top: 0;
  }

  &&& h3 {
    margin-top: 2rem;
    line-height: 24px;

    ${media.greaterThan('lg')`
      margin-top: 2.2rem;
    `}
  }

  &&& h4 {
    margin-top: 0;
    margin-bottom: 1.3rem;

    ${media.greaterThan('lg')`
      margin-bottom: 1.5rem;
    `}
  }

  .card {
    &__header {
      margin-bottom: 10px;

      h3 {
        margin-bottom: 15px;
      }

      &--caption {
        display: block;
        font-size: 1.4rem;
      }
    }

    ul {
      line-height: 30px;
    }

    a {
      border-bottom: none;
    }
  }

  .exp {
    margin-top: 2rem;
  }

  .skills {
    h3:not(:first-child) {
      margin-top: 2.4rem;
    }
  }

  .job-search {
    margin-top: 3rem;
  }
`;

const About = () => (
  <>
    <Seo slug="/" />
    <AboutWrapper>
      <h1>Hello!</h1>
      <p>Ri Zhao here :)!</p>
      <p>
        I write software and climb rocks. Currently gainfully employed at Stripe, but I am looking to get back into building 👷.
      </p>
      <p>
        <Link to="/contact">Click here to contact me 🙆‍♂ </Link>
      </p>
    </AboutWrapper>
  </>
);

export default About;
