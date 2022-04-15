import './tailwind.css';
import './assets/fontawesome/solid.css';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import populateStoredProjects from './helpers/populateStoredProjects';
import populateOverview from './helpers/populateOverview';
import populateSideInfo from './helpers/populateSideInfo';
import createEvents from './ui/createEvents';

createLocalStorage();
retrieveLocalStorage();
populateStoredProjects();
populateSideInfo();
populateOverview();
createEvents();
