import './tailwind.css';
import createLocalStorage from './local-storage/createLocalStorage';
import retrieveLocalStorage from './local-storage/retrieveLocalStorage';
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
