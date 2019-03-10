import React from 'react';
import Link from 'gatsby-link';
import About from '../components/About';
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



import { cyan500, pink50, pink100, pink200, red50, white } from 'material-ui/styles/colors';

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
          <About resume={resume} />
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

//<div class="canva-embed" data-height-ratio="1.2941" data-design-id="DAC2nJ2c2IY" style="padding:129.41% 5px 5px 5px;background:rgba(0,0,0,0.03);border-radius:8px;"></div><script async src="https://sdk.canva.com/v1/embed.js"></script><a href="https://www.canva.com/design/DAC2nJ2c2IY/view?utm_content=DAC2nJ2c2IY&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank">Professional Software Engineer Resume</a> by <a href="https://www.canva.com/michal.zadarnowski?utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank">Michal Zadarnowski</a>
