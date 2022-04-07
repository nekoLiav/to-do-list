import findProjectIndex from '../helpers/findProjectIndex';
import findTaskIndex from '../helpers/findTaskIndex';
import editTaskDisplay from '../ui/editTaskDisplay';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';

export default function editTask(projectId, taskId, title, dueDate, priority) {
  const project = toDoList[findProjectIndex(projectId)];
  const taskIndex = findTaskIndex(project, taskId);

  project.tasks[taskIndex].title = title;
  project.tasks[taskIndex].dueDate = dueDate;
  project.tasks[taskIndex].priority = priority;

  editTaskDisplay(title, dueDate, priority, taskId);

  updateLocalStorage();
}
