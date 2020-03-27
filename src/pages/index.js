import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/helpers';

const AboutWrapper = styled.div`
  ${media.greaterThan('lg')` 
    h1 {
      margin-top: 0;
    }
  `}

  & > h2 {
    margin-bottom: 15px;
    margin-top: 0;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 10px;

  h3 {
    margin-top: 0;
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

  &:first-child {
    margin-top: 20px;
  }

  ${media.greaterThan('lg')`
    margin-top: 2.2rem;
  `}

  ul {
    line-height: 30px;
  }

  a {
    border-bottom: none;
  }
`;

const Bubble = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin-bottom: 10px;
  margin-top: 0;
  background-color: #fff;
  &:not(:last-child) {
    margin-right: 5px;
  }
  color: #222;
  border-radius: 30px;
`;

const skills = [
  'Typescript',
  'React.js',
  'Node.js',
  'Three.js',
  'MongoDB',
  'Express',
  'Python',
  'HTML',
  'CSS',
  'Java',
  'Javascript',
  'UI/UX Design',
  'Figma',
  'Adobe InDesign',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Scrum',
  'Agile Development',
  'FramerX',
  'Sketch',
  'Prototyping',
];

const About = () => (
  <AboutWrapper>
    <h1>Hello!</h1>
    <p>
      I am Ri Zhao, a designer, entrepreneur and software engineer. My hobby is
      running and joining startups.
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
          Software Engineer at <a href="https://www.windspeed.io">Windspeed</a>
        </h3>
        <span className="caption">Mar 2020 - Present</span>
      </CardHeader>
      <ul>
        <li>In charge of implementing driver delivery app</li>
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
    {/* <h2>Skills</h2>
    <Card>
      {skills.map(skill => (
        <Bubble>{skill}</Bubble>
      ))}
    </Card> */}
    <p>Childishy, my goal in life is to make an impact in this world.</p>
  </AboutWrapper>
);

export default About;
