import './tailwind.css';
import addProjectUI from './ui/addProjectUI';
import renderStoredProjects from './ui/renderStoredProjects';

const main = document.getElementById('main');

const projectAddButton = document.createElement('button');
projectAddButton.id = 'project-add-button';
projectAddButton.className = 'bg-slate-300';
projectAddButton.textContent = '+ Add Project';
projectAddButton.addEventListener('click', addProjectUI);

main.append(projectAddButton);

renderStoredProjects();
