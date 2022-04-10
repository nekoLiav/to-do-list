import addTaskUI from './addTaskUI';

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

  projectContainer.className = 'w-full auto-rows-min project-container';
  projectInfo.className = 'flex gap-5 project-info';
  projectNameDisplay.className = 'w-full bg-slate-200 project-name';
  projectTasks.className = 'project-tasks';
  projectTaskAddButton.className = 'bg-slate-300 project-task-add-button';

  projectNameDisplay.textContent = project.name;
  projectTaskAddButton.textContent = '+ Add Task';

  projectTaskAddButton.addEventListener('click', (e) => {
    addTaskUI(parseInt(e.target.getAttribute('data-id'), 10));
  });

  projectInfo.append(projectNameDisplay);
  projectContainer.append(projectInfo, projectTasks, projectTaskAddButton);

  taskContainer.append(projectContainer);
}
