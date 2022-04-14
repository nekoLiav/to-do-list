import findProject from '../helpers/findProject';
import findTask from '../helpers/findTask';

export default function deleteTask(projectId, taskId) {
  const project = findProject(projectId);
  const task = findTask(projectId, taskId);

  project.tasks.splice(project.tasks.indexOf(task), 1);
}
