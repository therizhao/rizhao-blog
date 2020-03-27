import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/helpers';
import Seo from '../shared/Seo';

const AboutWrapper = styled.div`
  ${media.greaterThan('lg')` 
    h1 {
      margin-top: 0;
    }
  `}

  &&& h2 {
    /* margin-bottom: 15px; */
    margin-top: 0;
  }

  &&& h3 {
    margin-top: 2rem;

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
`;

const CardHeader = styled.div`
  margin-bottom: 10px;

  h3 {
    margin-bottom: 15px;
  }

  .caption {
    display: block;
    font-size: 1.4rem;
  }
`;

const Card = styled.div`
  margin-top: 2rem;
  border-radius: 6px;

  ul {
    line-height: 30px;
  }

  a {
    border-bottom: none;
  }
`;

const SkillsWrapper = styled.div`
  &&& h3:not(:first-child) {
    margin-top: 2.4rem;
  }
`;

const About = () => (
  <>
    <Seo slug="/" />
    <AboutWrapper>
      <h1>Hello!</h1>
      <p>
        I am Ri Zhao, a designer, entrepreneur and software engineer. My hobby
        is running and joining startups.
      </p>
      <h2>Experience</h2>
      <Card>
        <CardHeader>
          <h3>
            Founder of <a href="https://www.astartutors.sg">Astar Tutors</a>
          </h3>
          <span className="caption">July 2017 - Present</span>
        </CardHeader>
        <ul>
          <li>
            Developed and implemented codebase with feature specs including a
            flexible client engine, server backend, database, payment, Telegram
            interface, social API integration, etc
          </li>
          <li>
            Conducted user research, designed user flows and created UI mockups
          </li>
          <li>Ran advertisements on Facebook Ads and Google Ads</li>
          <li>
            Hired and managed a team of 6 software engineers and business
            developers
          </li>
          <li>> 8000 users and growing</li>
        </ul>
      </Card>
      <Card>
        <CardHeader>
          <h3>
            Software Engineer at{' '}
            <a href="https://www.windspeed.io">Windspeed</a>
          </h3>
          <span className="caption">Mar 2020 - Present</span>
        </CardHeader>
        <ul>
          <li>
            Working part-time in an up-and-coming perishables delivery startup
          </li>
          <li>In charge of developing driver delivery app</li>
        </ul>
      </Card>
      <Card>
        <CardHeader>
          <h3>
            Full Stack Developer Intern at{' '}
            <a href="https://www.dathena.io">Dathena</a>
          </h3>
          <span style={{ marginBottom: '.4rem' }} className="caption">
            Nov 2019 - Jan 2020
          </span>
          <span className="caption">Dec 2018 - Jun 2019</span>
        </CardHeader>
        <ul>
          <li>Worked extensively with React.js</li>
          <li>Created scalable and reusable components </li>
          <li>Implemented complex Data Visualizations with D3</li>
          <li>Implemented in-browser image review system</li>
          <li>
            Worked across multiple projects in a cross functional Agile team
          </li>
          <li>Worked with Python Flask backend</li>
        </ul>
      </Card>
      <SkillsWrapper>
        <h2>Skills</h2>
        <h3>Software Engineering</h3>
        <h4>Front-end Web Development</h4>
        <ul>
          <li>React.js</li>
          <li>Storybook.js</li>
          <li>Enzyme.js</li>
          <li>Jest.js</li>
          <li>Angular</li>
        </ul>
        <h4>Back-end Web Development</h4>
        <ul>
          <li>Node.js</li>
          <li>Django</li>
          <li>Flask</li>
          <li>MongoDB</li>
        </ul>
        <h4>Languages</h4>
        <ul>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>C</li>
        </ul>
        <h4>Project Management</h4>
        <ul>
          <li>Scrum</li>
          <li>Agile Development</li>
        </ul>
        <h3>Design</h3>
        <h4>User Interface</h4>
        <ul>
          <li>UI Design</li>
          <li>User Research</li>
          <li>Figma</li>
          <li>Sketch</li>
        </ul>
        <h4>Print</h4>
        <ul>
          <li>Adobe InDesign</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
        </ul>
        <h4>Industrial</h4>
        <ul>
          <li>Rhino3D</li>
          <li>Keyshot</li>
        </ul>
      </SkillsWrapper>
    </AboutWrapper>
  </>
);

export default About;
