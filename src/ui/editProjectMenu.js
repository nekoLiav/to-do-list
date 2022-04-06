import editProjectUI from './editProjectUI';
import deleteProjectUI from './deleteProjectUI';

export default function editProjectMenu(e) {
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

  projectEditButton[0].addEventListener('click', editProjectUI);
  projectDeleteButton[0].addEventListener('click', deleteProjectUI);

  projectMenu[0].classList.toggle('hidden');
}
