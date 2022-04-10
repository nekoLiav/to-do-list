import './tailwind.css';
import addProjectUI from './ui/addProjectUI';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './helpers/renderStoredProjects';
import renderOverview from './helpers/renderOverview';

const sideNavProjects = document.getElementById('side-nav-projects');

const projectAddButton = document.createElement('button');
projectAddButton.id = 'project-add-button';
projectAddButton.className = 'w-1/2 bg-slate-300';
projectAddButton.textContent = '+ Add Project';
projectAddButton.addEventListener('click', addProjectUI);

const overviewButton = document.getElementById('overview-button');
overviewButton.addEventListener('click', renderOverview);

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
