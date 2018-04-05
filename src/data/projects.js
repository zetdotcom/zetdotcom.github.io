import jezuszyje from '../images/jezuszyje.jpg';
import map from '../images/map.jpg';
import realestate from '../images/realestate.jpg';
import restaurant from '../images/restaurant.jpg';
import mywebsite from '../images/mywebsite.jpg';

const prosto = [
  {
    title: 'Community Website',
    link: 'https://www.jezuszyje.co.uk',
    git: '',
    skills: ['React', 'Firebase', 'Responsive', 'HTML5', 'CSS3', 'Sass'],
    desc: 'Church community website',
    img: jezuszyje,
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
    title: 'Real Estate',
    link: 'https://zetdotcom.github.io/react-real-estate/',
    git: 'https://github.com/zetdotcom/react-real-estate',
    skills: ['React', 'Responsive', 'HTML5', 'CSS3', 'Sass', 'JSON'],
    desc:
      'Real Estate sample website with filter section to allow you to search for the property you want. Planning to connect this app to Zoopla API',
    img: realestate,
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
];
export default prosto;
