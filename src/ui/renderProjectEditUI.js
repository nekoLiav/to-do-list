import editProject from '../core/editProject';
import deleteProject from '../core/deleteProject';

export default function renderProjectEditUI(projectId) {
  const sideNavProject = document.querySelectorAll(
    `.side-nav-project[data-id='${projectId}']`
  );
  const sideNavProjectName = document.querySelectorAll(
    `.side-nav-project-name[data-id='${projectId}']`
  );
  const mainViewProject = document.querySelectorAll(
    `.project-container[data-id='${projectId}']`
  );

  const projectEditPanel = document.createElement('div');
  const editName = document.createElement('input');
  const actionButtons = document.createElement('div');
  const confirmProjectButton = document.createElement('button');
  const deleteProjectButton = document.createElement('button');

  projectEditPanel.className =
    'flex items-center w-full p-1 rounded bg-slate-200';
  editName.className = 'text-sm rounded max-h-5';
  actionButtons.className = 'flex w-full gap-1';
  confirmProjectButton.className =
    'w-8 h-6 p-1 ml-auto text-green-500 rounded active:bg-slate-800 hover:bg-slate-600 fa-circle-check fa-solid bg-slate-700';
  deleteProjectButton.className =
    'w-8 h-6 p-1 text-red-500 rounded active:bg-slate-800 hover:bg-slate-600 bg-slate-700 fa-trash-can fa-solid';

  editName.type = 'text';

  editName.value = sideNavProjectName[0].textContent;

  confirmProjectButton.addEventListener('click', (e2) => {
    editProject(projectId, editName.value);
    e2.target.parentNode.parentNode.remove();
    sideNavProject[0].classList.remove('hidden');
  });

  deleteProjectButton.addEventListener('click', (e3) => {
    deleteProject(projectId);
    e3.target.parentNode.parentNode.remove();
    sideNavProject[0].remove();
    if (mainViewProject[0] !== undefined) {
      mainViewProject[0].remove();
    }
  });

  actionButtons.append(confirmProjectButton, deleteProjectButton);
  projectEditPanel.append(editName, actionButtons);

  sideNavProject[0].insertAdjacentElement('afterend', projectEditPanel);
  sideNavProject[0].classList.add('hidden');
  editName.focus();
}
