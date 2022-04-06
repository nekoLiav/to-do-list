import projectMenuEdit from './projectMenuEdit';
import projectMenuDelete from './projectMenuDelete';

export default function projectMenuOpen(e) {
  e.stopImmediatePropagation();

  const id = parseInt(e.target.getAttribute('data-id'), 10);

  const projectMenu = document.querySelectorAll(
    `.project-menu[data-id='${id}']`
  );
  const projectEditButton = document.querySelectorAll(
    `.project-edit-button[data-id='${id}']`
  );
  const projectDeleteButton = document.querySelectorAll(
    `.project-delete-button[data-id='${id}']`
  );

  projectEditButton[0].addEventListener('click', projectMenuEdit);
  projectDeleteButton[0].addEventListener('click', projectMenuDelete);

  projectMenu[0].classList.toggle('hidden');
}
