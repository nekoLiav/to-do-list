import editProject from '../helpers/editProject';

export default function projectMenuEdit(e) {
  e.stopImmediatePropagation();
  const id = parseInt(e.target.getAttribute('data-id'), 10);
  const projectName = document.querySelectorAll(
    `.project-name[data-id='${id}']`
  );
  projectName[0].disabled = false;
  projectName[0].focus();
  const setNewName = (e2) => {
    e2.stopImmediatePropagation();
    projectName[0].disabled = true;
    editProject(id, projectName[0].value);
    projectName[0].removeEventListener('blur', setNewName);
  };
  projectName[0].addEventListener('blur', setNewName);
  e.target.removeEventListener('click', projectMenuEdit);
}
