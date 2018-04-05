import React from 'react';
import Link from 'gatsby-link';

import './Section.scss';

const Section = props => (
  <section className={props.red ? 'red' : 'white'}>
    <div className="container">
      <div className="title">
        <h2>{props.title}</h2>
        <div className="icon">
          <img src={props.icon} />
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  </section>
);

export default Section;
