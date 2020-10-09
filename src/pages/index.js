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
      <p>
        I am Ri Zhao, a designer, entrepreneur and software engineer. I have a
        passion for learning and creative problem solving.
      </p>
      <p>
        I offer free software design/development/consulting services to
        organisations/individuals doing social good 💛.
      </p>
      <p>
        <Link to="/contact">
          Click here to contact me if you need any help 🙆‍♂{' '}
        </Link>
      </p>
      <h2 style={{ marginTop: 30 }}>Experience</h2>
      <div className="exp card">
        <div className="card__header">
          <h3>
            Software Engineer Intern at{' '}
            <a href="https://www.tiktok.com/">TikTok</a>
          </h3>
          <span className="card__header--caption">Aug 2020 - Present</span>
        </div>
      </div>
      <div className="exp card">
        <div className="card__header">
          <h3>
            Founder of <a href="https://www.astartutors.sg">Astar Tutors</a>
          </h3>
          <span className="card__header--caption">July 2017 - Present</span>
        </div>
        <ul>
          <li>
            Astar Tutors is tuition platform that helps tutors find tuition jobs
          </li>
          <li>
            Developed and implemented codebase with features including a
            flexible client engine (React.js), REST API endpoints, server
            backend (Node.js, Express), database (MongoDB), payment (Stripe),
            Telegram interface, social API integration and SMS interface
            (Twilio)
          </li>
          <li>
            Hired and led a team of 3 software engineers over 6 months to build
            a new product for parents to find tutors (React.js, Node.js,
            MongoDB, Stripe, Twilio)
          </li>
          <li>
            Created an in-house project management tool with GitHub, Slack,
            Zenhub integration to accelerate development process (Node.js)
          </li>
          <li>
            Obtained more than 10000 users and passively generating revenue of
            more than $1000/month
          </li>
        </ul>
      </div>
      <div className="exp card">
        <div className="card__header">
          <h3>
            Software Engineer at{' '}
            <a href="https://www.windspeed.io">Windspeed</a>
          </h3>
          <span className="card__header--caption">Mar 2020 - Present</span>
        </div>
        <ul>
          <li>
            Designed and led the development of a new driver delivery app to
            help streamline operations for perishables delivery (React.js,
            Whimsical)
          </li>
          <li>
            Conducted user research with drivers to discover their needs,
            behaviours and pain-points
          </li>
          <li>Worked closely with founders to plan out new features</li>
        </ul>
      </div>
      <div className="exp card">
        <div className="card__header">
          <h3>
            Full Stack Developer Intern at{' '}
            <a href="https://www.dathena.io">Dathena</a>
          </h3>
          <span
            style={{ marginBottom: '.4rem' }}
            className="card__header--caption"
          >
            Nov 2019 - Jan 2020
          </span>
          <span className="card__header--caption">Dec 2018 - Jun 2019</span>
        </div>
        <ul>
          <li>
            Created in-browser image annotation system as part of Dathena'
            computer vision solution to identify personally identifiable
            information in documents (D3.js, React.js, Jest, Enzyme.js)
          </li>
          <li>
            Implemented Dathena's UI component library encompassing complex data
            visualisations and reusable UI components used in Dathena's data
            privacy platform which is used by large-scale clients to visualise
            and protect users' data (React.js, D3.js, Storybook.js, Jest,
            Enzyme.js)
          </li>
          <li>
            Created data source crawling system to extract personally
            identifiable information from various documents in Microsoft
            Sharepoint for the training of machine-learning models (Flask,
            Django)
          </li>
          <li>
            Core developer of Dathena's AI-powered data privacy and security
            solution that helped Dathena raise $12 million in Series A round
          </li>
        </ul>
      </div>
      <div className="education card">
        <h2>Education</h2>
        <div className="card__header">
          <h3>
            Bachelor's in Computer Science (Honours), National University of
            Singapore
          </h3>
          <span className="card__header--caption">Aug 2019 - May 2022</span>
        </div>
        <ul>
          <li>Awarded NUS Global Merit Scholarship (Full-ride scholarship)</li>
          <li>
            Spent a year learning design fundamentals in NUS Industrial Design
            under distinguished designers (Aug 2019 - May 2020)
          </li>
        </ul>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <h3>Software Engineering</h3>
        <h4>Front-end Web Development</h4>
        <ul>
          <li>React.js</li>
          <li>Redux</li>
          <li>Gatsby.js</li>
          <li>GraphQL</li>
          <li>Storybook.js</li>
          <li>Enzyme.js</li>
          <li>Jest</li>
          <li>Angular</li>
        </ul>
        <h4>Back-end Web Development</h4>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
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
      </div>
    </AboutWrapper>
  </>
);

export default About;
