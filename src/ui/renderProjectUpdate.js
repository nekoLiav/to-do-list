export default function renderProjectUpdate(name, projectId) {
  const sideNavProjectName = document.querySelectorAll(
    `.side-nav-project-name[data-id='${projectId}']`
  );

  sideNavProjectName[0].textContent = name;
}
