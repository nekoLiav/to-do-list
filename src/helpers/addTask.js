import Task from '../factories/Task';
import addTaskDisplay from '../ui/addTaskDisplay';
import { toDoList } from './globals';

export default function addTask(projectId, title, dueDate, priority) {
  const projectIndex = toDoList.map((project) => project.id).indexOf(projectId);

  toDoList[projectIndex].tasks.push(new Task(title, dueDate, priority));

  // Fetch most recently added task to display
  const project = toDoList[projectIndex];
  const task = project.tasks[project.tasks.length - 1];

  addTaskDisplay(project, task);

  console.log(toDoList);
}
