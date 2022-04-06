import Task from '../factories/Task';
import addTaskDisplay from '../ui/addTaskDisplay';
import { toDoList } from './globals';

export default function addTask(projectId, title, dueDate, priority) {
  const projectIndex = toDoList.map((element) => element.id).indexOf(projectId);
  toDoList[projectIndex].tasks.push(new Task(title, dueDate, priority));
  // Update UI with new task information
  const project = toDoList[projectIndex];
  const task =
    toDoList[projectIndex].tasks[toDoList[projectIndex].tasks.length - 1];
  addTaskDisplay(project, task);

  console.log(toDoList);
}
