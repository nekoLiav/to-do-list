import './styles/meyer-reset.css';
import './styles/tailwind.css';
import renderSavedProjects from './ui/renderSavedProjects';
import projectAddOpen from './ui/projectAddOpen';

const projectAddButton = document.getElementById('project-add-button');

projectAddButton.addEventListener('click', projectAddOpen);
renderSavedProjects();
