export default function editProjectDisplay(name, projectId) {
  const projectName = document.querySelectorAll(
    `.project-name[data-id='${projectId}']`
  );

  projectName[0].textContent = name;
}
