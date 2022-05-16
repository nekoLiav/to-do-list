import './tailwind.css';
import styles from './ui/tailwind';
import selfIcon from './assets/images/HeartLogoNoBkg.svg';
import odinIcon from './assets/images/OdinLogo.svg';
import populateStoredProjects from './helpers/populateStoredProjects';
import populateOverview from './helpers/populateOverview';
import populateSideInfo from './helpers/populateSideInfo';
import createEvents from './ui/createEvents';
import firebase from './firebase/firebase';

const selfIconImg = new Image();
const odinIconImg = new Image();
selfIconImg.src = selfIcon;
odinIconImg.src = odinIcon;
selfIconImg.className = styles.selfIconImg;
odinIconImg.className = styles.odinIconImg;

document.getElementById('footer').append(selfIconImg, odinIconImg);

firebase();

populateStoredProjects();
populateSideInfo();
populateOverview();
createEvents();
