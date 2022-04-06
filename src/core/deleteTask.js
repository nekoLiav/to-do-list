import findProjectIndex from '../helpers/findProjectIndex';
import findTaskIndex from '../helpers/findTaskIndex';
import { toDoList } from './globals';

export default function deleteTask(projectId, taskId) {
  const project = toDoList[findProjectIndex(projectId)];
  const taskIndex = findTaskIndex(project, taskId);

  project.tasks.splice(taskIndex, 1);

  console.log(toDoList);
}
