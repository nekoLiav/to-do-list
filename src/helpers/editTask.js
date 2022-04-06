import { toDoList } from './globals';

export default function editTask(projectId, taskId) {
  const projectIndex = toDoList.map((element) => element.id).indexOf(projectId);
  const taskIndex = toDoList[projectIndex]
    .map((element) => element.id)
    .indexOf(taskId);
}
