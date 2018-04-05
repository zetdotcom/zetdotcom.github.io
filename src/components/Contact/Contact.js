import React from 'react';
import Link from 'gatsby-link';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {
  cyan500,
  pink50,
  pink100,
  pink200,
  red50,
} from 'material-ui/styles/colors';

import '../Contact/Contact.scss';

const styles = {
  errorStyle: {
    color: cyan500,
  },
  underlineStyle: {
    borderColor: pink50,
  },
  floatingLabelStyle: {
    color: pink50,
  },
  floatingLabelFocusStyle: {
    color: red50,
  },
};

const Contact = props => (
  <div>
    <div className="form">
      <form
        method="POST"
        action="https://formspree.io/michal.zadarnowski@gmail.com"
      >
        <TextField
          floatingLabelText="Your email"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          fullWidth={true}
          type="email"
          name="email"
        />
        <TextField
          floatingLabelText="Subject"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          fullWidth={true}
          type="text"
          name="subject"
        />

        <input type="hidden" name="_next" value="//zetdotcom.github.io" />

        <TextField
          name="message"
          fullWidth={true}
          type="text"
          floatingLabelText="Your Message"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          multiLine={true}
          rows={10}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
);

export default Contact;
