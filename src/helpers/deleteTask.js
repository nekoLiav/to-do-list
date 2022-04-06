import { toDoList } from './globals';

export default function deleteTask(projectId, taskId) {
  const projectIndex = toDoList.map((project) => project.id).indexOf(projectId);
  const taskIndex = toDoList[projectIndex].tasks
    .map((task) => task.id)
    .indexOf(taskId);

  toDoList[projectIndex].tasks.splice(taskIndex, 1);

  console.log(toDoList);
}
