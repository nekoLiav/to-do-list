import './tailwind.css';
import renderSavedProjects from './ui/renderSavedProjects';
import addProjectUI from './ui/addProjectUI';

const main = document.getElementById('main');

const projectAddButton = document.createElement('button');

projectAddButton.id = 'project-add-button';

projectAddButton.className = 'bg-slate-300';

projectAddButton.textContent = '+ Add Project';

projectAddButton.addEventListener('click', addProjectUI);

main.append(projectAddButton);

renderSavedProjects();
