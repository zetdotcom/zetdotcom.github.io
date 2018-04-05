import React from 'react';
import Link from 'gatsby-link';

import './Skills.scss';

import skile from '../../data/skills';

import FaEye from 'react-icons/lib/fa/eye';
import FaGithub from 'react-icons/lib/fa/github';

export default class Skills extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="skillsList">
        {skile.map((item, id) => {
          return (
            <div className="skill" key={id}>
              <img src={item.icon} />
              <div className="skillName">{item.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
