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
      <p>Ri Zhao here :) I am living in the moment!</p>
      <p>
        I offer free software development services to people doing social good
        💛
      </p>
      <p>
        <Link to="/contact">Click here to contact me 🙆‍♂ </Link>
      </p>
      <h2 style={{ marginTop: 30 }}>Experience</h2>
      <div className="exp card">
        <div className="card__header">
          <h3>
            Software Engineer Intern at{' '}
            <a href="https://www.tiktok.com/">TikTok</a>
          </h3>
          <span className="card__header--caption">Aug 2020 - Aug 2021</span>
        </div>
        <div>
          <ul>
            <li>
              Incredibly thankful for my incredible mentors, fellow interns for
              helping me grow during this internship
            </li>
            <li>
              Learnt to be more confident, accept my flaws and be kind to myself
              💛
            </li>
            <li>
              Created a new Golang ClickHouse database driver up to 9X faster
              than the original 🚀
            </li>
            <li>
              Created an oncall management system that increased alarm
              resolution speed by 5X. Used by hundreds of engineers across
              TikTok Video Architecture and E-commerce teams.
            </li>
          </ul>
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
          <span className="card__header--caption">Dec 2018 - Jun 2020</span>
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
        <div className="card__header">
          <h3>River Valley High School ❤️💙</h3>
          <span className="card__header--caption">Jan 2011 - Nov 2016</span>
        </div>
        <p>rvspirit</p>
        <ul>
          <li>Bloggged about my deeper emotions as a student 🤍</li>
          <li>Discovered my love for writing and introspection</li>
          <li>
            Also featured some writings from fellow schoolmates like me 🏠
          </li>
          <li>
            <a
              style={{ color: '#0070ff' }}
              href="https://rvspirit.wordpress.com/"
            >
              The website is still alive!
            </a>{' '}
            I also transferred some of its content into this blog
          </li>
        </ul>
        <p>rvmamashop</p>
        <ul>
          <li>Operated a widely loved snacks shop</li>
          <li>
            Carried large bags of snack around school and sold them to students
            of all ages
          </li>
          <li>Instagram account grew from 0-700 followers in a week</li>
          <li>
            Carried out interesting social experiments such as name your own
            price day (Realised that I actually earned more $ when users name
            their own price 😝)
          </li>
          <li>
            At it's peak, we had 4 franchise sellers from different levels to
            ensure we have full school coverage. Could have been a multi-million
            dollar franchise spanning across all schools in Singapore 🤔
          </li>
          <li>
            Eventually got shut down after a few months but was fun while it
            lasted 👍
          </li>
        </ul>
        <p>the shed</p>
        <ul>
          <li>
            Built a gaming shed with an og xbox console that stood proudly for 3
            days
          </li>
          <li>Fun memories for the students of the school</li>
          <li>
            Overcame numerous difficulties such as transporting wooden pallets
            from the nearby factories, buying a used tv set from Carousell,
            hammering nails to construct the shed on a weekend in secrecy
          </li>
          <li>Yes, it got torn down eventually 🙃</li>
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
          <li>Golang</li>
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
