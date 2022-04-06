import taskModalOpen from './taskModalOpen';
import editProjectMenu from './editProjectMenu';
import editTaskUI from './editTaskUI';

export default function addProjectDisplay(name, tasks, id) {
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
    'grid w-full gap-5 p-1 mt-1 mb-1 roundedauto-rows-min bg-slate-200 drop-shadow-md project-container';
  projectName.className =
    'col-span-3 row-start-1 p-1 ml-1 font-bold rounded col-start-1row-span-1 bg-slate-300 drop-shadow-md project-name';
  projectMenuContainer.className =
    'row-start-1 drop-shadow-md project-menu-container';
  projectMenuButton.className =
    'w-full p-1 mr-1 font-bold rounded bg-slate-300 project-menu-button';
  projectMenu.className =
    'absolute right-0 hidden mr-1 text-sm font-bold text-center rounded min-w-max bg-slate-300 drop-shadow-md project-menu';
  projectMenuButtons.className = 'project-menu-buttons';
  projectEditButton.className = 'p-1 rounded project-edit-button';
  projectDeleteButton.className =
    'p-1 bg-red-300 rounded project-delete-button';
  projectTasks.className =
    'grid col-span-4 p-1 text-sm list-inside project-tasks';
  projectTaskAddButton.className =
    'col-start-1 p-1 ml-1 mr-auto text-sm font-bold rounded bg-slate-300 drop-shadow-md project-task-add-button';

  projectName.value = name;

  projectMenuButton.textContent = 'Edit';
  projectEditButton.textContent = 'Edit Project';
  projectDeleteButton.textContent = 'Delete Project';
  projectTaskAddButton.textContent = '+ Add Task';

  projectMenuButton.addEventListener('click', editProjectMenu);
  projectTaskAddButton.addEventListener('click', taskModalOpen);

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

  if (tasks.length > 0) {
    tasks.forEach((element) => {
      const task = document.createElement('ul');
      const taskTitle = document.createElement('li');
      const taskDueDate = document.createElement('li');
      const taskPriority = document.createElement('li');
      const taskChecked = document.createElement('input');

      task.setAttribute('data-id', element.id);
      taskTitle.setAttribute('data-id', element.id);
      taskDueDate.setAttribute('data-id', element.id);
      taskPriority.setAttribute('data-id', element.id);
      taskChecked.setAttribute('data-id', element.id);

      taskChecked.type = 'checkbox';

      taskTitle.className = 'task-title';
      taskChecked.className = 'task-checked';
      taskDueDate.className = 'task-due-date';
      taskPriority.className = 'task-priority';
      task.className =
        'flex items-center justify-between rounded hover:bg-slate-300 drop-shadow-md task';

      taskTitle.textContent = element.title;
      taskDueDate.textContent = element.dueDate;
      taskPriority.textContent = element.priority;

      task.addEventListener('click', editTaskUI);

      task.append(taskChecked, taskTitle, taskDueDate, taskPriority);
      projectTasks.append(task);
    });
  }

  projectAddButton.insertAdjacentElement('beforebegin', projectContainer);
}
