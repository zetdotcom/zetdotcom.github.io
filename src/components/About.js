import React from 'react';
import TiClipboard from 'react-icons/lib/ti/clipboard';

const About = ({ resume }) => {
  return (
    <div className="info">
      <div className="aboutMe">
        <div>
          <h2>Front-End Developer</h2>
          <p>
            My name is Michal (for easiness - Michael). I am a happy husband and a father of two. Currently working as a
            Front End Developer in NCTech Imaging.
          </p>
          <p>Really passionate about front-end development, problem solving, and a good user friendly design.</p>
          <p>
            Experienced in developing web applications using React + Redux, constantly striving to develop my existing skills and keep up to date with quickly moving industry. 
            {/* Focusing on front end development technologies, feeling confident with html, css and javascript, now on
            route to master React, Redux, testing and all other associated technologies. */}
          </p>
          <p>
            If you would like to chat contact me usgin the form below, or checkout my resume for more details.
          </p>

        </div>
      </div>
      <a href={resume} target="blank">
        <div>
          <TiClipboard className="link-icon" /> Resume
        </div>
      </a>
    </div>
  );
};

export default About;
