import editProject from '../helpers/editProject';
import deleteProject from '../helpers/deleteProject';

export default function editProjectUI(e) {
  const projectId = parseInt(e.target.getAttribute('data-id'), 10);

  const projectContainer = document.querySelectorAll(
    `.project-container[data-id='${projectId}']`
  );
  const projectInfo = document.querySelectorAll(
    `.project-info[data-id='${projectId}']`
  );

  const projectName = document.querySelectorAll(
    `.project-name[data-id='${projectId}']`
  );

  const projectEditPanel = document.createElement('div');
  const editName = document.createElement('input');
  const confirmProjectButton = document.createElement('button');
  const deleteProjectButton = document.createElement('button');

  projectEditPanel.className = 'flex';
  confirmProjectButton.className = 'bg-slate-300';
  deleteProjectButton.className = 'bg-red-300';

  editName.type = 'text';

  editName.value = projectName[0].textContent;

  confirmProjectButton.textContent = 'Confirm Edit';
  deleteProjectButton.textContent = 'Delete Project';

  confirmProjectButton.addEventListener('click', (e2) => {
    editProject(projectId, editName.value);

    projectName[0].textContent = editName.value;

    e2.target.parentNode.remove();

    projectInfo[0].classList.remove('hidden');
  });

  deleteProjectButton.addEventListener('click', () => {
    deleteProject(projectId);

    projectContainer[0].remove();
  });

  projectEditPanel.append(editName, confirmProjectButton, deleteProjectButton);

  projectInfo[0].insertAdjacentElement('afterend', projectEditPanel);
  projectInfo[0].classList.add('hidden');
}
