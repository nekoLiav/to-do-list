import deleteProject from '../helpers/deleteProject';
import toDoList from '../helpers/globals';
import closeProjectMenu from './closeProjectMenu';

export default function projectMenuDelete(event) {
  const projectName = document.getElementById('project-name');
  const tasks = document.querySelectorAll('#tasks li');
  tasks.forEach((element) => element.remove());
  projectName.value = `${toDoList[0].name}`;
  deleteProject(projectName.getAttribute('data-index'));
  closeProjectMenu();
  event.target.removeEventListener('click', projectMenuDelete);
}
