import renderProjectEditUI from './renderProjectEditUI';

export default function renderSideNavProjects(project) {
  const sideNavProjects = document.getElementById('side-nav-projects');

  const sideNavProject = document.createElement('side-nav-project');
  const sideNavProjectName = document.createElement('p');
  const projectEditButton = document.createElement('button');

  sideNavProject.setAttribute('data-id', project.id);
  sideNavProjectName.setAttribute('data-id', project.id);
  projectEditButton.setAttribute('data-id', project.id);

  sideNavProject.className =
    'flex items-center justify-between w-full p-1 rounded bg-slate-200 side-nav-project';
  sideNavProjectName.className = 'side-nav-project-name';
  projectEditButton.className =
    'w-8 h-6 p-1 text-white rounded bg-slate-700 fa-pen-to-square fa-solid project-edit-button';

  sideNavProjectName.textContent = project.name;

  projectEditButton.addEventListener('click', (e) => {
    renderProjectEditUI(parseInt(e.target.getAttribute('data-id'), 10));
  });

  sideNavProject.append(sideNavProjectName, projectEditButton);
  sideNavProjects.append(sideNavProject);
}
