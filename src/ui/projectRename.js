import { toDoList } from '../helpers/globals';
import closeProjectMenu from './closeProjectMenu';

export default function projectRename() {
  const projectRenameButton = document.getElementById('project-rename');
  const projectName = document.getElementById('project-name');
  projectRenameButton.addEventListener('click', () => {
    closeProjectMenu();
    projectName.disabled = false;
    projectName.focus();
  });
  projectName.addEventListener('blur', (e) => {
    toDoList[e.target.getAttribute('data-index')].name = e.target.value;
    console.log(toDoList);
    e.target.disabled = true;
  });
}
