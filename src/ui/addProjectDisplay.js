import addTaskUI from './addTaskUI';
import editProjectUI from './editProjectUI';

export default function addProjectDisplay(projectName, projectId) {
  const projectAddButton = document.getElementById('project-add-button');

  const projectContainer = document.createElement('div');
  const projectInfo = document.createElement('div');
  const projectNameDisplay = document.createElement('p');
  const projectEditButton = document.createElement('button');
  const projectMenu = document.createElement('div');
  const projectDeleteButton = document.createElement('li');
  const projectTasks = document.createElement('ul');
  const projectTaskAddButton = document.createElement('button');

  projectContainer.setAttribute('data-id', projectId);
  projectInfo.setAttribute('data-id', projectId);
  projectNameDisplay.setAttribute('data-id', projectId);
  projectEditButton.setAttribute('data-id', projectId);
  projectMenu.setAttribute('data-id', projectId);
  projectDeleteButton.setAttribute('data-id', projectId);
  projectTasks.setAttribute('data-id', projectId);
  projectTaskAddButton.setAttribute('data-id', projectId);

  projectContainer.className =
    'w-full auto-rows-min bg-slate-200 project-container';
  projectInfo.className = 'flex gap-5 project-info';
  projectNameDisplay.className = 'project-name';
  projectEditButton.className = 'bg-slate-300 project-edit-button';
  projectMenu.className = 'absolute hidden min-w-max bg-slate-300 project-menu';
  projectDeleteButton.className = 'bg-red-300 project-delete-button';
  projectTasks.className = 'project-tasks';
  projectTaskAddButton.className = 'bg-slate-300 project-task-add-button';

  projectNameDisplay.textContent = projectName;
  projectEditButton.textContent = 'Edit Project';
  projectDeleteButton.textContent = 'Delete Project';
  projectTaskAddButton.textContent = '+ Add Task';

  projectEditButton.addEventListener('click', editProjectUI);
  projectTaskAddButton.addEventListener('click', addTaskUI);

  projectInfo.append(projectNameDisplay, projectEditButton);
  projectContainer.append(projectInfo, projectTasks, projectTaskAddButton);

  projectAddButton.insertAdjacentElement('beforebegin', projectContainer);
}
