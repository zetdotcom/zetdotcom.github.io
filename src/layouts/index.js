import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Michal Z"
      meta={[
        {
          name: 'Personal website',
          content: 'Michal Zadarnowski front end developer portfolio website',
        },
        {
          name: 'front end developer, web developer, michal zadarnowski',
          content: 'front end developer portfolio',
        },
      ]}
    />

    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
