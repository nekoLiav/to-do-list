import './tailwind.css';
import addProjectUI from './ui/addProjectUI';
import createLocalStorage from './helpers/createLocalStorage';
import retrieveLocalStorage from './helpers/retrieveLocalStorage';
import renderStoredProjects from './ui/renderStoredProjects';

const main = document.getElementById('main');

const projectAddButton = document.createElement('button');
projectAddButton.id = 'project-add-button';
projectAddButton.className = 'bg-slate-300';
projectAddButton.textContent = '+ Add Project';
projectAddButton.addEventListener('click', addProjectUI);

main.append(projectAddButton);

createLocalStorage();
retrieveLocalStorage();
renderStoredProjects();
