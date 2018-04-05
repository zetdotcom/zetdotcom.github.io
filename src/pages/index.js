import React from 'react';
import Link from 'gatsby-link';
import HomePage from '../components/HomePage/HomePage';
import Section from '../components/Section/Section';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Links from '../components/Links/Links';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import icon_about from '../Icons/icon_about.svg';
import icon_project from '../Icons/icon_projects.svg';
import icon_skills from '../Icons/icon_skills.svg';
import icon_education from '../Icons/icon_education.svg';
import icon_contact from '../Icons/icon_contact.svg';
import resume from '../data/MZ_CV.pdf';

import TiClipboard from 'react-icons/lib/ti/clipboard';

import {
  cyan500,
  pink50,
  pink100,
  pink200,
  red50,
  white,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: pink50,
    borderColor: pink100,
    primary1Color: red50,
    primary2Color: pink200,
    primary3Color: red50,
    alternateTextColor: white,
  },
});

const IndexPage = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="main">
      <HomePage />
      <Section title="About" icon={icon_about}>
        <div>
          <div className="info">
            <div className="aboutMe">
              <div>
                <h2>Front-End / React/ Javascript developer</h2>
                <p>
                  Really passionate about web development, problem solving, and
                  a good and accessible design.
                </p>
                <p>
                  Focusing on front end development technologies, feeling
                  confident with html, css and javascript, now on route to
                  master React, Redux, testing and all other associated
                  technologies.
                </p>

                <p>
                  Currently during career path change - from becoming
                  professional Accountant I have decided to become a successful
                  Web Developer. Even though I have a degree in accountancy, and
                  was close to becoming Chartered Accountant I do not regret my
                  decision.
                </p>
                <p>
                  Spending many of my evenings developing my Front-End skills or
                  working on side projects I am really serious about my career
                  change decision and the plan for future is to become Front-End
                  Senior/ Engineer/ Architect of even Fullstack or Software
                  Developer in the future. With passion and ambitions I believe
                  this will happen.
                </p>
              </div>
            </div>
            <a href={resume} target="blank">
              {' '}
              <div>
                <TiClipboard className="link-icon" /> Resume
              </div>
            </a>
          </div>
        </div>
      </Section>
      <Section title="Projects" red={true} icon={icon_project}>
        <div>
          <Projects />
        </div>
      </Section>
      <Section title="Skillset" icon={icon_skills}>
        <div>
          <Skills />
        </div>
      </Section>
      {/* <Section title="Education" red={true} icon={icon_education}>
      <div>
        Offering creative design solutions to solve business problems is what I
        do best. I write in JavaScript, CSS, Java, and PHP. I also speak to
        databases and make servers do stuff. I like working on scalability,
        performance, reusability, and great user experiences. As a designer and
        a developer, I write code that conforms to industry standards and
        semantic best practices. I am able to transform static artwork into
        pixel prefect, interactive and fully functional interfaces.
      </div>
</Section> */}
      <Section title="Contact" icon={icon_contact} red={true}>
        <div>
          <Contact />
          <Links />
        </div>
      </Section>
    </div>
  </MuiThemeProvider>
);

export default IndexPage;
