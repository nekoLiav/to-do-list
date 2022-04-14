import findTask from './findTask';

export default function hideUnusedDate(projectId, taskId) {
  const dueDateElement = document.querySelector(
    `.task-due-date[data-task-id='${taskId}']`
  );

  const task = findTask(projectId, taskId);

  if (task.dueDate === '') {
    dueDateElement.classList.add('hidden');
  } else {
    dueDateElement.classList.remove('hidden');
  }
}
