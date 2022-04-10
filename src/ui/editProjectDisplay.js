export default function editProjectDisplay(name, projectId) {
  const sideNavProjectName = document.querySelectorAll(
    `.side-nav-project-name[data-id='${projectId}']`
  );

  sideNavProjectName[0].textContent = name;
}
