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
  const confirmProjectButton = document.createElement('button');
  const deleteProjectButton = document.createElement('button');

  projectEditPanel.className = 'flex flex-col items-center bg-slate-200';
  editName.className = 'max-h-6';
  confirmProjectButton.className = 'w-8 p-1 rounded bg-slate-200 w-max';
  deleteProjectButton.className = 'w-8 p-1 bg-red-200 rounded w-max';

  editName.type = 'text';

  editName.value = sideNavProjectName[0].textContent;

  confirmProjectButton.textContent = 'Confirm';
  deleteProjectButton.textContent = 'Delete';

  confirmProjectButton.addEventListener('click', (e2) => {
    editProject(projectId, editName.value);
    e2.target.parentNode.remove();
    sideNavProject[0].classList.remove('hidden');
  });

  deleteProjectButton.addEventListener('click', (e3) => {
    deleteProject(projectId);
    e3.target.parentNode.remove();
    sideNavProject[0].remove();
    mainViewProject[0].remove();
  });

  projectEditPanel.append(editName, confirmProjectButton, deleteProjectButton);

  sideNavProject[0].insertAdjacentElement('afterend', projectEditPanel);
  sideNavProject[0].classList.add('hidden');
  editName.focus();
}
