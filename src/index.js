import './tailwind.css';
import addProjectUI from './ui/addProjectUI';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './helpers/renderStoredProjects';
import renderOverview from './helpers/renderOverview';
import renderSideNavInfo from './ui/renderSideNavInfo';
import renderToday from './helpers/renderToday';

const sideNavProjects = document.getElementById('side-nav-projects');

const projectAddButton = document.createElement('button');
projectAddButton.id = 'project-add-button';
projectAddButton.className = 'bg-slate-300';
projectAddButton.textContent = '+';
projectAddButton.addEventListener('click', addProjectUI);

const overviewButton = document.getElementById('overview-button');
overviewButton.addEventListener('click', renderOverview);

const todayButton = document.getElementById('today-button');
todayButton.addEventListener('click', renderToday);

const sideNavProjectsButton = document.getElementById(
  'side-nav-projects-button'
);
sideNavProjectsButton.addEventListener('click', () => {
  sideNavProjects.classList.toggle('hidden');
});

sideNavProjectsButton.append(projectAddButton);

createLocalStorage();
retrieveLocalStorage();
renderStoredProjects();
renderSideNavInfo();
