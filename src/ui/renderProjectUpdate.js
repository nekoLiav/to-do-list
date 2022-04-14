export default function renderProjectUpdate(name, projectId) {
  const sideProjectName = document.querySelector(
    `.side-project-name[data-project-id='${projectId}']`
  );
  const mainViewProject = document.querySelector(
    `.project-name[data-project-id='${projectId}']`
  );

  sideProjectName.textContent = name;
  if (mainViewProject !== undefined && mainViewProject !== null) {
    mainViewProject.textContent = name;
  }
}
