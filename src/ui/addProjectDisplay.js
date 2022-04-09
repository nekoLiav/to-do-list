import addTaskUI from './addTaskUI';
import editProjectUI from './editProjectUI';

export default function addProjectDisplay(project) {
  const projectList = document.getElementById('project-list');
  const projectTaskContainer = document.getElementById(
    'project-task-container'
  );
  const projectAddButton = document.getElementById('project-add-button');

  const projectListItem = document.createElement('project-list-item');
  const projectContainer = document.createElement('div');
  const projectInfo = document.createElement('div');
  const projectNameDisplay = document.createElement('p');
  const projectEditButton = document.createElement('button');
  const projectMenu = document.createElement('div');
  const projectDeleteButton = document.createElement('li');
  const projectTasks = document.createElement('ul');
  const projectTaskAddButton = document.createElement('button');

  projectContainer.setAttribute('data-id', project.id);
  projectInfo.setAttribute('data-id', project.id);
  projectNameDisplay.setAttribute('data-id', project.id);
  projectEditButton.setAttribute('data-id', project.id);
  projectMenu.setAttribute('data-id', project.id);
  projectDeleteButton.setAttribute('data-id', project.id);
  projectTasks.setAttribute('data-id', project.id);
  projectTaskAddButton.setAttribute('data-id', project.id);

  projectListItem.className = 'project-list-item';
  projectContainer.className = 'flex flex-col gap-5 project-container';
  projectInfo.className = 'flex justify-between project-info bg-slate-300';
  projectNameDisplay.className = 'project-name';
  projectEditButton.className = 'bg-slate-300 w-max project-edit-button';
  projectMenu.className = 'absolute hidden min-w-max bg-slate-300 project-menu';
  projectDeleteButton.className = 'bg-red-300 project-delete-button';
  projectTasks.className = 'project-tasks';
  projectTaskAddButton.className = 'w-max bg-slate-300 project-task-add-button';

  projectListItem.textContent = project.name;
  projectNameDisplay.textContent = project.name;
  projectEditButton.textContent = 'Edit Project';
  projectDeleteButton.textContent = 'Delete Project';
  projectTaskAddButton.textContent = '+ Add Task';

  projectEditButton.addEventListener('click', (e) => {
    editProjectUI(parseInt(e.target.getAttribute('data-id'), 10));
  });

  projectTaskAddButton.addEventListener('click', (e) => {
    addTaskUI(parseInt(e.target.getAttribute('data-id'), 10));
  });

  projectList.append(projectListItem);

  projectInfo.append(projectNameDisplay, projectEditButton);
  projectContainer.append(projectInfo, projectTasks, projectTaskAddButton);
  projectTaskContainer.append(projectContainer);

  projectAddButton.insertAdjacentElement('beforebegin', projectContainer);
}
