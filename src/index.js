import './assets/tailwind.css';
import './assets/fontawesome/solid.css';
import './assets/fontawesome/fontawesome.css';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './helpers/renderStoredProjects';
import renderOverview from './helpers/renderOverview';
import renderSideNavInfo from './helpers/renderSideNavInfo';
import listeners from './ui/listeners';

createLocalStorage();
retrieveLocalStorage();
renderStoredProjects();
renderSideNavInfo();
renderOverview();
listeners();
