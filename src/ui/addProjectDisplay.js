import editProjectMenu from './editProjectMenu';
import addTaskUI from './addTaskUI';

export default function addProjectDisplay(name, id) {
  const projectAddButton = document.getElementById('project-add-button');

  const projectContainer = document.createElement('div');
  const projectInfo = document.createElement('div');
  const projectName = document.createElement('p');
  const projectEditButton = document.createElement('button');
  const projectMenu = document.createElement('div');
  const projectDeleteButton = document.createElement('li');
  const projectTasks = document.createElement('ul');
  const projectTaskAddButton = document.createElement('button');

  projectContainer.setAttribute('data-id', id);
  projectInfo.setAttribute('data-id', id);
  projectName.setAttribute('data-id', id);
  projectEditButton.setAttribute('data-id', id);
  projectMenu.setAttribute('data-id', id);
  projectDeleteButton.setAttribute('data-id', id);
  projectTasks.setAttribute('data-id', id);
  projectTaskAddButton.setAttribute('data-id', id);

  projectContainer.className =
    'w-full auto-rows-min bg-slate-200 project-container';
  projectInfo.className = 'flex gap-5';
  projectName.className = 'project-name';
  projectEditButton.className = 'bg-slate-300 project-edit-button';
  projectMenu.className = 'absolute hidden min-w-max bg-slate-300 project-menu';
  projectDeleteButton.className = 'bg-red-300 project-delete-button';
  projectTasks.className = 'project-tasks';
  projectTaskAddButton.className = 'bg-slate-300 project-task-add-button';

  projectName.textContent = name;
  projectEditButton.textContent = 'Edit Project';
  projectDeleteButton.textContent = 'Delete Project';
  projectTaskAddButton.textContent = '+ Add Task';

  projectEditButton.addEventListener('click', editProjectMenu);
  projectTaskAddButton.addEventListener('click', addTaskUI);

  projectInfo.append(projectName, projectEditButton);
  projectContainer.append(projectInfo, projectTasks, projectTaskAddButton);

  projectAddButton.insertAdjacentElement('beforebegin', projectContainer);
}
