import editTaskDisplay from '../ui/editTaskDisplay';
import { toDoList } from './globals';

export default function editTask(projectId, taskId, title, dueDate, priority) {
  const projectIndex = toDoList.map((project) => project.id).indexOf(projectId);
  const taskIndex = toDoList[projectIndex].tasks
    .map((task) => task.id)
    .indexOf(taskId);

  toDoList[projectIndex].tasks[taskIndex].title = title;
  toDoList[projectIndex].tasks[taskIndex].dueDate = dueDate;
  toDoList[projectIndex].tasks[taskIndex].priority = priority;

  editTaskDisplay(title, dueDate, priority, projectId, taskId);

  console.log(toDoList);
}
