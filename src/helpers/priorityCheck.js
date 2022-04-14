import findTask from './findTask';

export default function priorityCheck(projectId, taskId) {
  const task = findTask(projectId, taskId);
  return task.priority;
}
