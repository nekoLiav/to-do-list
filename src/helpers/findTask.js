import { toDoList } from '../core/globals';
import findProject from './findProject';

export default function findTask(projectId, taskId) {
  const project = findProject(projectId);
  const projectIndex = toDoList.indexOf(project);
  const taskIndex = project.tasks.map((task) => task.id).indexOf(taskId);
  return toDoList[projectIndex].tasks[taskIndex];
}
