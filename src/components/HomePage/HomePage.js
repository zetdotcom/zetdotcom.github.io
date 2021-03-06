import React from 'react';
import Link from 'gatsby-link';
import FloatWords from '../FloatWords/FloatWords';

import './HomePage.scss';

const HomePage = () => (
  <div className="home-page">
    <div className="color" />
    <div className="container">
      <header>
        <h2>Michal Zadarnowski | zetdotcom. </h2>
        <h2>
          <a href="http://zetlearning-co-uk.stackstaging.com/" target="blank">
            BLOG
          </a>{' '}
        </h2>
      </header>
      <div className="home-content">
        <h1>Front-End Developer</h1>

        <div className="quote">
          “To be successful, the first thing to do is fall in love with your
          work”
          <span> (Sister Mary Lauretta)</span>
        </div>
      </div>
    </div>
    <FloatWords />
  </div>
);

export default HomePage;
