import projectMenuEdit from './projectMenuEdit';
import projectMenuDelete from './projectMenuDelete';

export default function projectMenuOpen(e) {
  e.stopImmediatePropagation();
  const index = parseInt(e.target.getAttribute('data-index'), 10);
  const projectMenu = document.querySelectorAll(
    `.project-menu[data-index='${index}']`
  );
  const projectEditButton = document.querySelectorAll(
    `.project-edit-button[data-index='${index}']`
  );
  const projectDeleteButton = document.querySelectorAll(
    `.project-delete-button[data-index='${index}']`
  );
  projectEditButton[0].addEventListener('click', projectMenuEdit);
  projectDeleteButton[0].addEventListener('click', projectMenuDelete);
  projectMenu[0].classList.toggle('hidden');
}
