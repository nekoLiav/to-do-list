import './tailwind.css';
import styles from './ui/tailwind';
import selfIcon from './assets/images/HeartLogoNoBkg.svg';
import odinIcon from './assets/images/OdinLogo.svg';
import createLocalStorage from './local-storage/createLocalStorage';
import retrieveLocalStorage from './local-storage/retrieveLocalStorage';
import populateStoredProjects from './helpers/populateStoredProjects';
import populateOverview from './helpers/populateOverview';
import populateSideInfo from './helpers/populateSideInfo';
import createEvents from './ui/createEvents';

const selfIconImg = new Image();
const odinIconImg = new Image();
selfIconImg.src = selfIcon;
odinIconImg.src = odinIcon;
selfIconImg.className = styles.selfIconImg;
odinIconImg.className = styles.odinIconImg;

document.getElementById('footer').append(selfIconImg, odinIconImg);

createLocalStorage();
retrieveLocalStorage();
populateStoredProjects();
populateSideInfo();
populateOverview();
createEvents();
