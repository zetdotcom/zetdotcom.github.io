import jezuszyje from '../images/jezuszyje.jpg';
import map from '../images/map.jpg';
import msjglasgow from '../images/msjglasgow.png';
import restaurant from '../images/restaurant.jpg';
import mywebsite from '../images/mywebsite.jpg';
import smg from '../images/smg.jpg';
import amam from '../images/amam.png';
import jatymy from '../images/jatymy.png';

const prosto = [
  {
    title: 'AmAm App',
    link: 'https://amam.app',
    git: '',
    skills: ['Next.js', 'Tailwind', 'Serverless', 'AWS Amplify'],
    desc: 'App for easy food ordering in small cityes',
    img: amam,
  },
  {
    title: 'JaTyMy',
    link: 'https://app.miloscizycie.pl',
    git: '',
    skills: ['Next.js', 'MaterialUI', 'Netlify', 'Open AI'],
    desc: 'App for married couples to help them thrive',
    img: jatymy,
  },
  {
    title: 'Electric Map',
    link: 'https://electric-map-1515938108302.firebaseapp.com/',
    git: 'https://github.com/zetdotcom/electric-map',
    skills: [
      'React',
      'Firebase',
      'Responsive',
      'HTML5',
      'CSS3',
      'Sass',
      'Google Maps API',
    ],
    desc:
      'Project build with Google Maps API showing charing points for electric cars in the UK',
    img: map,
  },
  {
    title: 'MSJ Glasgow',
    link: 'https://msjglasgow.org',
    skills: [
      'React',
      'Responsive',
      'HTML5',
      'CSS3',
      'Sass',
      'JSON',
      'Typescript',
    ],
    desc:
      'Community website displaying posts and events data from Facebook Page - Facebook API integration',
    img: msjglasgow,
  },
  {
    title: 'Restaurant',
    link: 'https://zetdotcom.github.io/jquery-restaurant/',
    git: 'https://github.com/zetdotcom/jquery-restaurant',
    skills: ['jQuery', 'Responsive', 'HTML5', 'CSS3'],
    desc: 'Responsive, clean and modern restaurant website',
    img: restaurant,
  },
  {
    title: 'My Website',
    link: 'https://zetdotcom.github.io',
    git: 'https://github.com/zetdotcom/zetdotcom.github.io/tree/develop',
    skills: ['React', 'Responsive', 'HTML5', 'CSS3', 'Gatsby', 'Sass'],
    desc: 'My personal website',
    img: mywebsite,
  },

  {
    title: 'SMG Learning',
    link: 'https://zetdotcom.github.io/smg-learning',
    git: 'https://github.com/zetdotcom/smg-learning',
    skills: ['React', 'Responsive', 'HTML5', 'CSS3', 'Gatsby', 'Sass'],
    desc: 'SMG Learning homepage prototype webiste',
    img: smg,
  },
];
export default prosto;
