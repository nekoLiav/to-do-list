import projectRename from '../helpers/projectRename';
import closeProjectMenu from './closeProjectMenu';

export default function projectRenameUI() {
  const projectRenameButton = document.getElementById('project-rename');
  const projectName = document.getElementById('project-name');
  projectRenameButton.addEventListener('click', () => {
    closeProjectMenu();
    projectName.disabled = false;
    projectName.focus();
  });
  projectName.addEventListener('blur', (e) => {
    projectRename(e.target.getAttribute('data-index'), e.target.value);
    e.target.disabled = true;
  });
}
