import './tailwind.css';
import renderSavedProjects from './ui/renderSavedProjects';
import addProjectUI from './ui/addProjectUI';

const projectAddButton = document.getElementById('project-add-button');

projectAddButton.addEventListener('click', addProjectUI);
renderSavedProjects();
