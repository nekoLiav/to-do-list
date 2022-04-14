import './assets/tailwind.css';
import './assets/fontawesome/solid.css';
import './assets/fontawesome/fontawesome.css';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './helpers/renderStoredProjects';
import renderOverview from './helpers/renderOverview';
import renderSideInfo from './helpers/renderSideInfo';
import listeners from './ui/listeners';
import checkEmptyTaskList from './helpers/checkEmptyTaskList';

localStorage.clear();
createLocalStorage();
retrieveLocalStorage();
renderStoredProjects();
renderSideInfo();
renderOverview();
checkEmptyTaskList();
listeners();
