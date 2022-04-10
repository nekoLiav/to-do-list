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

  projectContainer.className = 'flex flex-col w-full gap-5 project-container';
  projectInfo.className = 'flex project-info';
  projectNameDisplay.className = 'w-full bg-slate-200 project-name';
  projectTasks.className = 'project-tasks';
  projectTaskAddButton.className =
    'p-1 text-sm rounded bg-slate-300 project-task-add-button';

  projectNameDisplay.textContent = project.name;
  projectTaskAddButton.textContent = '+ Add Task';

  projectTaskAddButton.addEventListener('click', (e) => {
    const projectId = parseInt(e.target.getAttribute('data-id'), 10);
    addTask(projectId, 'New Task', '', 'Low');
  });

  projectInfo.append(projectNameDisplay);
  projectContainer.append(projectInfo, projectTasks, projectTaskAddButton);

  taskContainer.append(projectContainer);
}
