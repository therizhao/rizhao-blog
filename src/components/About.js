import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  margin-top: 50px;

  & > h2 {
    font-family: acumin-pro, sans-serif;
    margin-bottom: 15px;
    margin-top: 0;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 10px;

  h3 {
    font-family: acumin-pro, sans-serif;
    margin-top: 0;
    margin-bottom: 15px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

const Card = styled.div`
  margin-top: 30px;
  border-radius: 6px;

  &:first-child {
    margin-top: 20px;
  }

  ul {
    padding-left: 20px;
    line-height: 30px;
  }

  a {
    box-shadow: none;
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
    <h2>Intro</h2>
    <p>
      Hello, I am Ri Zhao. I am a designer, software engineer and entrepreneur.
      My hobby is running and joining startups.
    </p>
    <h2>Experience</h2>
    <Card>
      <CardHeader>
        <h3>
          Founder of <a href="https://www.astartutors.sg">Astar Tutors</a>
        </h3>
        <span>July 2017 - Present</span>
      </CardHeader>
      <ul>
        <li>
          Conducted user research, designed user flows and created UI mockups
        </li>
        <li>
          Developed and implemented codebase with feature specs including a
          flexible client engine, server backend, database, payment, Telegram
          interface, social API integration, etc
        </li>
        <li>Ran advertisements on Facebook Ads and Google Ads</li>
        <li>Performed analytics and made key business decisions</li>
        <li>
          Hired and managed a team of 6 software engineers and business
          developers
        </li>
        <li>> 6000 users and growing</li>
      </ul>
    </Card>
    <Card>
      <CardHeader>
        <h3>
          Full Stack Developer Intern at{' '}
          <a href="https://www.dathena.io">Dathena</a>
        </h3>
        <span>Dec 2018 - Jun 2019</span>
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
    <h2>Skills</h2>
    <Card>
      {skills.map(skill => (
        <Bubble>{skill}</Bubble>
      ))}
    </Card>
  </AboutWrapper>
);

export default About;
