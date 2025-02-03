import React from 'react';
import TiClipboard from 'react-icons/lib/ti/clipboard';

const About = ({ resume }) => {
  return (
    <div className="info">
      <div className="aboutMe">
        <div>
          <h2>Senior Front-End Developer</h2>
          <p>
            My name is Michal. I am a happy husband and father of four,
            currently working as a Senior Frontend Engineer at CreateFuture
            while also building my side project, amam.app - to help people in
            small cities make it easy to order food from local restaurants.
          </p>
          <p>
            Passionate about crafting **scalable, high-performance web
            applications**, problem-solving, and delivering user-friendly
            designs.
          </p>
          <p>
            With **6+ years of experience**, I specialize in **React, Next.js, and
            modern frontend development**, while also working with **Node.js,
            AWS, Docker, and Terraform** to build robust, scalable systems.
            Experienced in handling **large-scale applications with complex
            business logic** used by millions.
          </p>
          <p>
            If you'd like to connect, feel free to reach out using the form
            below or check out my resume for more details.
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
