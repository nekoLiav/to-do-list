import './tailwind.css';
import './assets/fontawesome/solid.css';
import './assets/fontawesome/fontawesome.css';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './helpers/renderStoredProjects';
import renderOverview from './helpers/renderOverview';
import populateSideInfo from './helpers/populateSideInfo';
import listeners from './ui/listeners';

localStorage.clear();
createLocalStorage();
retrieveLocalStorage();
renderStoredProjects();
populateSideInfo();
renderOverview();
listeners();
