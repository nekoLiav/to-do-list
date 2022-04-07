import findProjectIndex from '../helpers/findProjectIndex';
import findTaskIndex from '../helpers/findTaskIndex';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';

export default function deleteTask(projectId, taskId) {
  const project = toDoList[findProjectIndex(projectId)];
  const taskIndex = findTaskIndex(project, taskId);

  project.tasks.splice(taskIndex, 1);

  updateLocalStorage();
}
