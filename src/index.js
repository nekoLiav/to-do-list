import './tailwind.css';
import addProject from './core/addProject';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './helpers/renderStoredProjects';
import renderOverview from './helpers/renderOverview';
import renderSideNavInfo from './helpers/renderSideNavInfo';
import renderToday from './helpers/renderToday';

const sideNavProjects = document.getElementById('side-nav-projects');

const projectAddButton = document.createElement('button');
projectAddButton.id = 'project-add-button';
projectAddButton.className = 'p-1 rounded bg-slate-300';
projectAddButton.textContent = '+ Add Task';
projectAddButton.addEventListener('click', () => addProject('New Project'));

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

sideNavProjects.append(projectAddButton);

createLocalStorage();
retrieveLocalStorage();
renderStoredProjects();
renderSideNavInfo();
