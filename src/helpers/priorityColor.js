import findTask from './findTask';

export default function priorityColor(projectId, taskId) {
  const priorityElement = document.querySelector(
    `.task-priority[data-task-id='${taskId}']`
  );

  const task = findTask(projectId, taskId);

  if (task.priority === 'low') {
    priorityElement.classList.remove('text-red-500');
    priorityElement.classList.remove('text-yellow-500');
    priorityElement.classList.add('text-green-500');
  } else if (task.priority === 'medium') {
    priorityElement.classList.remove('text-red-500');
    priorityElement.classList.remove('text-green-500');
    priorityElement.classList.add('text-yellow-500');
  } else if (task.priority === 'high') {
    priorityElement.classList.remove('text-green-500');
    priorityElement.classList.remove('text-yellow-500');
    priorityElement.classList.add('text-red-500');
  }
}
