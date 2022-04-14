import findTask from './findTask';
import editTask from '../core/editTask';

export default function toggleTaskComplete(projectId, taskId) {
  const task = findTask(projectId, taskId);

  if (task.complete) {
    task.complete = false;
  } else {
    task.complete = true;
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
