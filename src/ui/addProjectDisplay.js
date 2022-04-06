import projectMenuOpen from './projectMenuOpen';
import taskModalOpen from './taskModalOpen';
import taskEditMenu from './taskEditMenu';

export default function addProjectDisplay(name, tasks, id) {
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
  const projectAddButton = document.getElementById('project-add-button');

  projectContainer.className =
    'grid w-full gap-5 p-1 mt-1 mb-1 roundedauto-rows-min bg-slate-200 drop-shadow-md project-container';
  projectContainer.setAttribute('data-id', id);
  projectName.className =
    'col-span-3 row-start-1 p-1 ml-1 font-bold rounded col-start-1row-span-1 bg-slate-300 drop-shadow-md project-name';
  projectName.disabled = true;
  projectName.value = name;
  projectName.setAttribute('data-id', id);
  projectMenuContainer.className =
    'row-start-1 drop-shadow-md project-menu-container';
  projectMenuButton.className =
    'w-full p-1 mr-1 font-bold rounded bg-slate-300 project-menu-button';
  projectMenuButton.textContent = 'Edit';
  projectMenuButton.setAttribute('data-id', id);
  projectMenuButton.addEventListener('click', projectMenuOpen);
  projectMenu.className =
    'absolute right-0 hidden mr-1 text-sm font-bold text-center rounded min-w-max bg-slate-300 drop-shadow-md project-menu';
  projectMenu.setAttribute('data-id', id);
  projectMenuButtons.className = 'project-menu-buttons';
  projectEditButton.className = 'p-1 rounded project-edit-button';
  projectEditButton.textContent = 'Edit Project';
  projectEditButton.setAttribute('data-id', id);
  projectDeleteButton.className =
    'p-1 bg-red-300 rounded project-delete-button';
  projectDeleteButton.textContent = 'Delete Project';
  projectDeleteButton.setAttribute('data-id', id);
  projectTasks.className =
    'grid col-span-4 p-1 text-sm list-inside project-tasks';
  projectTasks.setAttribute('data-id', id);
  projectTaskAddButton.className =
    'col-start-1 p-1 ml-1 mr-auto text-sm font-bold rounded bg-slate-300 drop-shadow-md project-task-add-button';
  projectTaskAddButton.textContent = '+ Add Task';
  projectTaskAddButton.setAttribute('data-id', id);
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

  if (tasks.length > 0) {
    tasks.forEach((element) => {
      const task = document.createElement('ul');
      const taskTitle = document.createElement('li');
      const taskDueDate = document.createElement('li');
      const taskPriority = document.createElement('li');
      const taskChecked = document.createElement('input');
      taskTitle.textContent = element.title;
      taskDueDate.textContent = element.dueDate;
      taskPriority.textContent = element.priority;
      taskChecked.type = 'checkbox';
      task.className =
        'flex items-center justify-between rounded hover:bg-slate-300 drop-shadow-md';
      taskTitle.setAttribute('data-id', element.id);
      task.addEventListener('click', taskEditMenu);
      task.append(taskChecked, taskTitle, taskDueDate, taskPriority);
      projectTasks.append(task);
    });
  }

  projectAddButton.insertAdjacentElement('beforebegin', projectContainer);
}
