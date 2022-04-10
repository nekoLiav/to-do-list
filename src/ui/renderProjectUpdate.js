export default function renderProjectUpdate(name, projectId) {
  const sideNavProjectName = document.querySelectorAll(
    `.side-nav-project-name[data-id='${projectId}']`
  );
  const mainViewProject = document.querySelectorAll(
    `.project-name[data-id='${projectId}']`
  );

  sideNavProjectName[0].textContent = name;
  if (mainViewProject[0] !== undefined) {
    mainViewProject[0].textContent = name;
  }
}
