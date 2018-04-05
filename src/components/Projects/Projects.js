import React from 'react';
import Link from 'gatsby-link';

import './Projects.scss';
import ProjectsList from '../../data/projects.json';
import prosto from '../../data/projects';

import FaEye from 'react-icons/lib/fa/eye';
import FaGithub from 'react-icons/lib/fa/github';

export default class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="projectsList">
        {prosto.map((item, key) => {
          const checkRepo = () => {
            if (item.git === '') {
              return (
                <a href="">
                  <div className="link">
                    <FaGithub />
                  </div>
                  <div className="link-desc">Source code </div>
                </a>
              );
            } else {
              return (
                <a href={item.git} target="blank">
                  <div className="link">
                    <FaGithub />
                  </div>
                  <div className="link-desc">Source code </div>
                </a>
              );
            }
          };
          return (
            <div className="project" key={key}>
              <div className="projectTitle">{item.title}</div>
              <div className="thumbnail">
                <img src={item.img} />
                <div className="links">
                  <a href={item.link} target="blank">
                    <div className="link">
                      <FaEye />
                    </div>
                    <div className="link-desc">Visit website</div>
                  </a>
                  {checkRepo()}
                </div>
              </div>

              <div className="description">
                <div className="projectSkills">
                  {item.skills.map((skill, id) => {
                    return <div key={id}>{skill}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
