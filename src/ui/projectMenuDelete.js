import deleteProject from '../helpers/deleteProject';

export default function projectMenuDelete(e) {
  e.stopImmediatePropagation();
  const id = parseInt(e.target.getAttribute('data-id'), 10);
  const projectContainer = document.querySelectorAll(
    `.project-container[data-id='${id}']`
  );
  deleteProject(id);
  projectContainer[0].remove();
  e.target.removeEventListener('click', projectMenuDelete);
}
