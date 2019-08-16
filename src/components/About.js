import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  & > h2 {
    font-family: Montserrat, sans-serif;
  }

  p {
  }
`;

const Card = styled.div`
  border-radius: 6px;
  margin-top: 40px;

  &:first-child {
    margin-top: 20px;
  }

  h3 {
    font-family: Montserrat, sans-serif;
    margin-top: 0;
  }

  li {
    list-style: none;
    padding-left: 2px;
  }

  a {
    box-shadow: none;
  }
`;

const Bubble = styled.span`
  padding: 4px 8px;
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
];

const About = () => (
  <AboutWrapper>
    <h2>Intro</h2>
    <p>
      Hello I am Ri Zhao. I am an entrepreneur, a software engineer and a design
      student. My hobby is running and joining startups.
    </p>
    <h2>Experience</h2>
    <Card>
      <h3>
        Founder of <a href="https://www.astartutors.sg">Astar Tutors</a>
      </h3>
      <ul>
        <li>Built and marketed the product from scratch </li>
        <li>Leading a cross-functional team of 6 using Scrum methodologies </li>
        <li>Web app with > 4000 users and growing</li>
      </ul>
    </Card>
    <Card>
      <h3>
        Full Stack Developer Intern at{' '}
        <a href="https://www.dathena.io">Dathena</a>
      </h3>
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
    {skills.map(skill => (
      <Bubble>{skill}</Bubble>
    ))}
  </AboutWrapper>
);

export default About;
