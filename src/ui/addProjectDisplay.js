import projectMenuOpen from './projectMenuOpen';
import taskModalOpen from './taskModalOpen';

export default function addProjectDisplay(name, tasks, index) {
  const main = document.getElementById('main');
  const projectContainer = document.createElement('div');
  const projectName = document.createElement('input');
  const projectMenuContainer = document.createElement('div');
  const projectMenuButton = document.createElement('button');
  const projectMenu = document.createElement('div');
  const projectMenuButtons = document.createElement('ul');
  const projectEditButton = document.createElement('li');
  const projectDeleteButton = document.createElement('li');
  const projectTasks = document.createElement('ol');
  const projectTaskAddButton = document.createElement('button');

  projectContainer.className =
    'grid p-1 mt-1 mb-1 rounded auto-rows-min bg-slate-200 drop-shadow-md project-container';
  projectName.className =
    'row-start-1 p-1 ml-1 font-bold rounded bg-slate-300 drop-shadow-md project-name';
  projectName.disabled = true;
  projectName.value = name;
  projectName.setAttribute('data-index', index);
  projectMenuContainer.className =
    'row-start-1 min-w-max drop-shadow-md project-menu-container';
  projectMenuButton.className =
    'min-w-full p-1 mr-1 font-bold rounded bg-slate-300 project-menu-button';
  projectMenuButton.textContent = 'Edit';
  projectMenuButton.setAttribute('data-index', index);
  projectMenuButton.addEventListener('click', projectMenuOpen);
  projectMenu.className =
    'absolute right-0 hidden mr-1 text-sm font-bold text-center rounded min-w-max bg-slate-300 drop-shadow-md project-menu';
  projectMenu.setAttribute('data-index', index);
  projectMenuButtons.className = 'project-menu-buttons';
  projectEditButton.className = 'p-1 rounded project-edit-button';
  projectEditButton.textContent = 'Edit Project';
  projectEditButton.setAttribute('data-index', index);
  projectDeleteButton.className =
    'p-1 bg-red-300 rounded project-delete-button';
  projectDeleteButton.textContent = 'Delete Project';
  projectDeleteButton.setAttribute('data-index', index);
  projectTasks.className =
    'p-1 ml-2 text-sm list-decimal list-inside project-tasks';
  projectTasks.setAttribute('data-index', index);
  projectTaskAddButton.className =
    'col-start-1 p-1 ml-1 mr-auto text-sm rounded bg-slate-300 drop-shadow-md project-task-add-button';
  projectTaskAddButton.textContent = '+ Add Task';
  projectTaskAddButton.setAttribute('data-index', index);
  projectTaskAddButton.addEventListener('click', taskModalOpen);
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

  tasks.forEach((element) => {
    const taskListItem = document.createElement('li');
    const taskTitle = element.title;
    taskListItem.textContent = `${taskTitle}`;
    projectTasks.append(taskListItem);
  });

  main.append(projectContainer);
}
