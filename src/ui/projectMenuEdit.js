import editProject from '../helpers/editProject';
import closeProjectMenu from './closeProjectMenu';

export default function projectMenuEdit(event1) {
  const projectName = document.getElementById('project-name');
  projectName.disabled = false;
  projectName.focus();
  projectName.addEventListener('blur', function blurred(event2) {
    projectName.disabled = true;
    editProject(event2.target.getAttribute('data-index'), event2.target.value);
    projectName.removeEventListener('blur', blurred);
  });
  closeProjectMenu();
  event1.target.removeEventListener('click', projectMenuEdit);
}
