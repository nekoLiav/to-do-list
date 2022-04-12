import './assets/tailwind.css';
import './assets/fontawesome/solid.css';
import './assets/fontawesome/fontawesome.css';
import addProject from './core/addProject';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './helpers/renderStoredProjects';
import renderOverview from './helpers/renderOverview';
import renderSideNavInfo from './helpers/renderSideNavInfo';
import renderToday from './helpers/renderToday';

const projectAddButton = document.getElementById('project-add-button');
projectAddButton.addEventListener('click', () => addProject('New Project'));

const overviewButton = document.getElementById('overview-button');
overviewButton.addEventListener('click', renderOverview);

const todayButton = document.getElementById('today-button');
todayButton.addEventListener('click', renderToday);

createLocalStorage();
retrieveLocalStorage();
renderStoredProjects();
renderSideNavInfo();
renderOverview();
