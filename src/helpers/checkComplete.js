import findTask from './findTask';

export default function checkComplete(projectId, taskId) {
  const taskTitle = document.querySelector(
    `.task-title[data-task-id='${taskId}']`
  );
  const taskCompleteButton = document.querySelector(
    `.task-complete-button[data-task-id='${taskId}']`
  );

  const task = findTask(projectId, taskId);

  if (task.complete) {
    taskCompleteButton.classList.remove('text-slate-400');
    taskCompleteButton.classList.add('text-green-500');
    taskTitle.classList.add('line-through');
  } else {
    taskTitle.classList.remove('line-through');
    taskCompleteButton.classList.remove('text-green-500');
    taskCompleteButton.classList.add('text-slate-400');
  }
}
