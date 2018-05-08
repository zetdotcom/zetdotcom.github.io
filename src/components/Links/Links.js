import React from 'react';
import Link from 'gatsby-link';

import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular';
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular';

import TiMail from 'react-icons/lib/ti/mail';

import './Links.scss';

const Links = () => (
  <div className="contact--links">
    <div className="row row1">
      <div>
        <a href="mailto:michal.zadarnowski@gmail.com">
          <TiMail className="link-icon" /> michal.zadarnowski@gmail.com
        </a>
      </div>
    </div>
    <div className="row row2">
      <a href="https://www.linkedin.com/in/michal-zadarnowski">
        <TiSocialLinkedinCircular className="link-icon" />
      </a>
      <a href="https://github.com/zetdotcom" target="blank">
        <TiSocialGithubCircular className="link-icon" />
      </a>
    </div>
  </div>
);

export default Links;
