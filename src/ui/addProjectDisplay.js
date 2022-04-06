import editProjectMenu from './editProjectMenu';
import addTaskUI from './addTaskUI';

export default function addProjectDisplay(name, id) {
  const projectAddButton = document.getElementById('project-add-button');

  const projectContainer = document.createElement('div');
  const projectName = document.createElement('input');
  const projectMenuContainer = document.createElement('div');
  const projectMenuButton = document.createElement('button');
  const projectMenu = document.createElement('div');
  const projectMenuButtons = document.createElement('ul');
  const projectEditButton = document.createElement('li');
  const projectDeleteButton = document.createElement('li');
  const projectTasks = document.createElement('ul');
  const projectTaskAddButton = document.createElement('button');

  projectContainer.setAttribute('data-id', id);
  projectName.setAttribute('data-id', id);
  projectMenuButton.setAttribute('data-id', id);
  projectMenu.setAttribute('data-id', id);
  projectEditButton.setAttribute('data-id', id);
  projectDeleteButton.setAttribute('data-id', id);
  projectTasks.setAttribute('data-id', id);
  projectTaskAddButton.setAttribute('data-id', id);

  projectContainer.className =
    'grid w-full auto-rows-min bg-slate-200 project-container';
  projectName.className =
    'col-span-3 col-start-1 row-span-1 row-start-1 bg-slate-300 project-name';
  projectMenuContainer.className = 'row-start-1 project-menu-container';
  projectMenuButton.className =
    'w-full font-bold bg-slate-300 project-menu-button';
  projectMenu.className =
    'absolute hidden text-sm text-center min-w-max bg-slate-300 project-menu';
  projectMenuButtons.className = 'project-menu-buttons';
  projectEditButton.className = ' project-edit-button';
  projectDeleteButton.className = 'bg-red-300 project-delete-button';
  projectTasks.className = 'grid col-span-4 list-inside project-tasks';
  projectTaskAddButton.className =
    'col-start-1 bg-slate-300 project-task-add-button';

  projectName.value = name;

  projectMenuButton.textContent = 'Edit';
  projectEditButton.textContent = 'Edit Project';
  projectDeleteButton.textContent = 'Delete Project';
  projectTaskAddButton.textContent = '+ Add Task';

  projectMenuButton.addEventListener('click', editProjectMenu);
  projectTaskAddButton.addEventListener('click', addTaskUI);

  projectName.disabled = true;

  projectContainer.append(
    projectName,
    projectMenuContainer,
    projectTasks,
    projectTaskAddButton
  );
  projectMenuContainer.append(projectMenuButton);
  projectMenuButton.append(projectMenu);
  projectMenu.append(projectMenuButtons);
  projectMenuButtons.append(projectEditButton, projectDeleteButton);

  projectAddButton.insertAdjacentElement('beforebegin', projectContainer);
}
