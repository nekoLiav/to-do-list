import editProject from '../core/editProject';
import deleteProject from '../core/deleteProject';

export default function editProjectUI(projectId) {
  const sideNavProject = document.querySelectorAll(
    `.side-nav-project[data-id='${projectId}']`
  );
  const sideNavProjectName = document.querySelectorAll(
    `.side-nav-project-name[data-id='${projectId}']`
  );

  const projectEditPanel = document.createElement('div');
  const editName = document.createElement('input');
  const confirmProjectButton = document.createElement('button');
  const deleteProjectButton = document.createElement('button');

  projectEditPanel.className = '';
  editName.className = 'max-h-6';
  confirmProjectButton.className = 'bg-slate-300';
  deleteProjectButton.className = 'bg-red-300';

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
  });

  projectEditPanel.append(editName, confirmProjectButton, deleteProjectButton);

  sideNavProject[0].insertAdjacentElement('afterend', projectEditPanel);
  sideNavProject[0].classList.add('hidden');
  editName.focus();
}
