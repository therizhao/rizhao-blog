import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  margin-top: 50px;

  & > h2 {
    font-family: Montserrat, sans-serif;
    margin-bottom: 15px;
    margin-top: 0;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 10px;

  h3 {
    font-family: Montserrat, sans-serif;
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
  'MongoDB',
  'Express',
  'Python',
  'Go',
  'Java',
  'HTML',
  'CSS',
  'Javascript',
  'UI/UX Design',
  'Figma',
  'Adobe InDesign',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Scrum',
  'Agile Development',
];

const About = () => (
  <AboutWrapper>
    <h2>Intro</h2>
    <p>
      Hello, I am Ri Zhao. I am an entrepreneur, a software engineer and a
      design student. My hobby is running and joining startups.
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
        <li>Built and marketed the product from scratch </li>
        <li>Leading a cross-functional team of 6 using Scrum methodologies </li>
        <li>Web app with > 4000 users and growing</li>
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
