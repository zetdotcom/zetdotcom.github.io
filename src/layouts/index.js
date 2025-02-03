import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Michał Zadarnowski | Senior Software Engineer"
      meta={[
        {
          name: 'Personal website',
          content: 'Michal Zadarnowski front end developer portfolio website',
        },
        {
          name:
            'front end developer, web developer, michal zadarnowski, react developer, senior software engineer',
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
