import './tailwind.css';
import addProjectUI from './ui/addProjectUI';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './helpers/renderStoredProjects';

const projectTaskContainer = document.getElementById('project-task-container');

const projectAddButton = document.createElement('button');
projectAddButton.id = 'project-add-button';
projectAddButton.className = 'col-span-3 col-start-2 row-start-1 bg-slate-300';
projectAddButton.textContent = '+ Add Project';
projectAddButton.addEventListener('click', addProjectUI);

projectTaskContainer.append(projectAddButton);

localStorage.clear();
createLocalStorage();
retrieveLocalStorage();
renderStoredProjects();
