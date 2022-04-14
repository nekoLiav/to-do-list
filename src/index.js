import './tailwind.css';
import './assets/fontawesome/solid.css';
import './assets/fontawesome/fontawesome.css';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import populateStoredProjects from './helpers/populateStoredProjects';
import populateOverview from './helpers/populateOverview';
import populateSideInfo from './helpers/populateSideInfo';
import listeners from './ui/listeners';

localStorage.clear();
createLocalStorage();
retrieveLocalStorage();
populateStoredProjects();
populateSideInfo();
populateOverview();
listeners();
