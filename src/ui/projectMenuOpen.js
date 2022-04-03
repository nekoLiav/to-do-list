import projectMenuEdit from './projectMenuEdit';
import projectMenuDelete from './projectMenuDelete';

export default function projectMenuOpen() {
  const projectMenu = document.getElementById('project-menu');
  const projectEditButton = document.getElementById('project-edit-button');
  const projectDeleteButton = document.getElementById('project-delete-button');
  projectMenu.classList.toggle('hidden');
  projectEditButton.addEventListener('click', projectMenuEdit);
  projectDeleteButton.addEventListener('click', projectMenuDelete);
}
