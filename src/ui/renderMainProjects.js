import addTask from '../core/addTask';

export default function renderMainProjects(project) {
  const taskContainer = document.getElementById('task-container');

  const projectContainer = document.createElement('div');
  const projectInfo = document.createElement('div');
  const projectNameDisplay = document.createElement('p');
  const projectTasks = document.createElement('ul');
  const projectTaskAddButton = document.createElement('button');

  projectContainer.setAttribute('data-id', project.id);
  projectInfo.setAttribute('data-id', project.id);
  projectNameDisplay.setAttribute('data-id', project.id);
  projectTasks.setAttribute('data-id', project.id);
  projectTaskAddButton.setAttribute('data-id', project.id);

  projectContainer.className = 'flex flex-col w-full gap-1 project-container';
  projectInfo.className = 'flex project-info';
  projectNameDisplay.className =
    'w-full p-1 ml-5 font-bold text-white rounded project-name';
  projectTasks.className = 'flex flex-col w-full gap-1 project-tasks';
  projectTaskAddButton.className =
    'w-8 h-6 p-1 rounded hover:bg-slate-100 active:bg-slate-300 fa-solid fa-plus bg-slate-200 project-task-add-button';

  projectNameDisplay.textContent = project.name;

  projectTaskAddButton.addEventListener('click', (e) => {
    const projectId = parseInt(e.target.getAttribute('data-id'), 10);
    addTask(projectId, 'New Task', '', 'Low', false);
  });

  projectInfo.append(projectNameDisplay);
  projectContainer.append(projectInfo, projectTasks, projectTaskAddButton);

  taskContainer.append(projectContainer);
}
