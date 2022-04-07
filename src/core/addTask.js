import Task from '../factories/Task';
import findProjectIndex from '../helpers/findProjectIndex';
import mostRecentTask from '../helpers/mostRecentTask';
import addTaskDisplay from '../ui/addTaskDisplay';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';

export default function addTask(projectId, title, dueDate, priority) {
  const project = toDoList[findProjectIndex(projectId)];

  project.tasks.push(new Task(title, dueDate, priority));

  const task = mostRecentTask(project);

  addTaskDisplay(project, task);

  updateLocalStorage();
}
