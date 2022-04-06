import { toDoList } from './globals';

export default function deleteTask(projectId, taskId) {
  toDoList[projectId].tasks.splice(taskId, 1);
  console.log(toDoList);
}
