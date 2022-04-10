import addTaskUI from './addTaskUI';
import editProjectUI from './editProjectUI';

export default function addProjectDisplay(project) {
  const sideNavProjects = document.getElementById('side-nav-projects');

  const sideNavProject = document.createElement('side-nav-project');
  const projectContainer = document.createElement('div');
  const projectInfo = document.createElement('div');
  const sideNavProjectName = document.createElement('p');
  const projectEditButton = document.createElement('button');
  const projectMenu = document.createElement('div');
  const projectTasks = document.createElement('ul');
  const projectTaskAddButton = document.createElement('button');

  const projectTaskContainer = document.getElementById(
    'project-task-container'
  );

  sideNavProject.setAttribute('data-id', project.id);
  projectContainer.setAttribute('data-id', project.id);
  projectInfo.setAttribute('data-id', project.id);
  sideNavProjectName.setAttribute('data-id', project.id);
  projectEditButton.setAttribute('data-id', project.id);
  projectMenu.setAttribute('data-id', project.id);
  projectTasks.setAttribute('data-id', project.id);
  projectTaskAddButton.setAttribute('data-id', project.id);

  sideNavProject.className =
    'flex justify-between w-full bg-slate-300 side-nav-project';
  projectContainer.className =
    'flex flex-col gap-5 bg-slate-200 project-container';
  projectInfo.className = 'flex justify-between project-info bg-slate-300';
  sideNavProjectName.className = 'side-nav-project-name';
  projectEditButton.className = 'bg-slate-300 w-max project-edit-button';
  projectMenu.className = 'absolute hidden min-w-max bg-slate-300 project-menu';
  projectTasks.className = 'project-tasks';
  projectTaskAddButton.className = 'w-max bg-slate-300 project-task-add-button';

  sideNavProjectName.textContent = project.name;
  projectEditButton.textContent = 'Edit Project';
  projectTaskAddButton.textContent = '+ Add Task';

  projectEditButton.addEventListener('click', (e) => {
    editProjectUI(parseInt(e.target.getAttribute('data-id'), 10));
  });

  projectTaskAddButton.addEventListener('click', (e) => {
    addTaskUI(parseInt(e.target.getAttribute('data-id'), 10));
  });

  sideNavProject.append(sideNavProjectName, projectEditButton);
  sideNavProjects.append(sideNavProject);

  projectInfo.append();
  projectContainer.append(projectInfo, projectTasks, projectTaskAddButton);
  projectTaskContainer.append(projectContainer);
}
