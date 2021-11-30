import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Google Clone',
    desc: 'A google clone to search for up-to-date results, news, images and videos using React.js.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Modern UI UX Website',
    desc: 'A Modern UI UX Website transformed from a Figma design',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Dictionary App',
    desc: 'A dictionary app using html, css and javascript where we can search for words and it outputs word meaning, word pronunciation, audio pronunciation and usage example.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'NerdySpook Portfolio',
    desc: 'A portfolio for myself, The portfolio is made using ReactJs',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc: 'A weather app get the weather details of a particular city by entering the city name.',
    img: ProjectImg,
  },
];

export default projects;
