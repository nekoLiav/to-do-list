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
    'flex items-center justify-between w-full p-1 rounded cursor-pointer hover:bg-slate-100 active:bg-slate-300 bg-slate-200 side-nav-project';
  sideNavProjectName.className = 'side-nav-project-name';
  projectEditButton.className =
    'hidden w-8 h-6 p-1 text-white rounded hover:bg-slate-600 active:bg-slate-800 bg-slate-700 fa-pen-to-square fa-solid project-edit-button';

  sideNavProjectName.textContent = project.name;

  projectEditButton.addEventListener('click', (e) => {
    renderProjectEditUI(parseInt(e.target.getAttribute('data-id'), 10));
  });

  sideNavProject.addEventListener('click', (e) => {
    const projectId = e.target.getAttribute('data-id');
    document.querySelectorAll('.project-edit-button').forEach((button) => {
      if (button.getAttribute('data-id') === projectId) {
        button.classList.toggle('hidden');
      } else {
        button.classList.add('hidden');
      }
    });
  });

  sideNavProject.append(sideNavProjectName, projectEditButton);
  sideNavProjects.append(sideNavProject);
}
