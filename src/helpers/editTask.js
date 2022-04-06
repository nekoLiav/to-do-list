import { toDoList } from './globals';

export default function editTask(
  projectId,
  taskId,
  title,
  dueDate,
  priority,
  checked
) {
  const projectIndex = toDoList.map((project) => project.id).indexOf(projectId);
  const taskIndex = toDoList[projectIndex].tasks
    .map((task) => task.id)
    .indexOf(taskId);

  toDoList[projectIndex].tasks[taskIndex].title = title;
  toDoList[projectIndex].tasks[taskIndex].dueDate = dueDate;
  toDoList[projectIndex].tasks[taskIndex].priority = priority;
  toDoList[projectIndex].tasks[taskIndex].checked = checked;

  console.log(toDoList);
}
