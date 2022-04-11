import findTask from '../helpers/findTask';
import editTask from './editTask';

export default function completeTask(projectId, taskId) {
  const task = findTask(projectId, taskId);

  if (task.complete === false) {
    task.complete = true;
  } else if (task.complete === true) {
    task.complete = false;
  }

  editTask(
    projectId,
    taskId,
    task.title,
    task.dueDate,
    task.priority,
    task.complete
  );
}
