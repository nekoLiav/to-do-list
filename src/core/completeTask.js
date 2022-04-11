import findTask from '../helpers/findTask';
import editTask from './editTask';

export default function completeTask(projectId, taskId) {
  const task = findTask(projectId, taskId);

  task.complete = true;

  editTask(
    projectId,
    taskId,
    task.title,
    task.dueDate,
    task.priority,
    task.complete
  );
}
