export default function addProjectUI(name, tasks) {
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
  projectName.value = name;
  projectMenuContainer.className =
    'row-start-1 min-w-max drop-shadow-md project-menu-container';
  projectMenuButton.className =
    'min-w-full p-1 mr-1 font-bold rounded bg-slate-300 project-menu-button';
  projectMenuButton.textContent = 'Edit';
  projectMenu.className =
    'absolute right-0 hidden mr-1 text-sm font-bold text-center rounded min-w-max bg-slate-300 drop-shadow-md project-menu';
  projectMenuButtons.className = 'project-menu-buttons';
  projectEditButton.className = 'p-1 rounded project-edit-button';
  projectDeleteButton.className =
    'p-1 bg-red-300 rounded project-delete-button';
  projectTasks.className =
    'p-1 ml-2 text-sm list-decimal list-inside project-tasks';
  projectTaskAddButton.className =
    'col-start-1 p-1 ml-1 mr-auto text-sm font-bold rounded bg-slate-300 project-task-add-button';

  projectContainer.append(projectName, projectMenuContainer, projectTasks);
  projectMenuContainer.append(projectMenuButton);
  projectMenuButton.append(projectMenu);
  projectMenu.append(projectMenuButtons);
  projectMenuButtons.append(projectEditButton, projectDeleteButton);

  tasks.forEach((element) => {
    const taskListItem = document.createElement('li');
    const task = element;
    taskListItem.textContent = task;
    projectTasks.append(taskListItem);
  });

  main.append(projectContainer);
}
