import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import './tailwind.css';
import styles from './ui/tailwind';
import selfIcon from './assets/images/HeartLogoNoBkg.svg';
import odinIcon from './assets/images/OdinLogo.svg';
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

populateStoredProjects();
populateSideInfo();
populateOverview();
createEvents();

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCldsbcJjYz7-KEIJZw-eYis1JwQyWuZrc',
  authDomain: 'to-do-list-8ab16.firebaseapp.com',
  projectId: 'to-do-list-8ab16',
  storageBucket: 'to-do-list-8ab16.appspot.com',
  messagingSenderId: '350157315620',
  appId: '1:350157315620:web:708975adb4bfd57dcd82b1',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
