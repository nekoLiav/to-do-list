import Task from '../factories/Task';
import findProjectIndex from './findProjectIndex';
import mostRecentTask from './mostRecentTask';
import addTaskDisplay from '../ui/addTaskDisplay';
import { toDoList } from './globals';

export default function addTask(projectId, title, dueDate, priority) {
  const project = toDoList[findProjectIndex(projectId)];

  project.tasks.push(new Task(title, dueDate, priority));

  const task = mostRecentTask(project);

  addTaskDisplay(project, task);

  console.log(toDoList);
}
