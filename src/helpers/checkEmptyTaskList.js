import findProject from './findProject';

export default function checkEmptyTaskList(projectId) {
  const projectTasksList = document.querySelector(
    `.project-tasks[data-project-id='${projectId}']`
  );

  const project = findProject(projectId);

  if (projectTasksList !== null) {
    if (project.tasks.length === 0) {
      projectTasksList.classList.add('hidden');
    } else {
      projectTasksList.classList.remove('hidden');
    }
  }
}
