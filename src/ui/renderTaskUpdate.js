import formatDates from '../helpers/formatDates';
import priorityColor from '../helpers/priorityColor';

export default function renderTaskUpdate(
  title,
  dueDate,
  priority,
  complete,
  taskId
) {
  const taskCompleteButton = document.querySelector(
    `.task-complete-button[data-id='${taskId}']`
  );
  const taskTitle = document.querySelector(`.task-title[data-id='${taskId}']`);
  const taskDueDate = document.querySelector(
    `.task-due-date[data-id='${taskId}']`
  );
  const taskPriority = document.querySelector(
    `.task-priority[data-id='${taskId}']`
  );

  if (complete === true || complete === 'true') {
    taskCompleteButton.classList.remove('text-slate-400');
    taskCompleteButton.classList.add('text-green-500');
    taskTitle.classList.add('line-through');
    taskTitle.classList.add('text-slate-500');
    taskCompleteButton.setAttribute('data-complete', true);
  } else {
    taskCompleteButton.classList.add('text-slate-400');
    taskCompleteButton.classList.remove('text-green-500');
    taskTitle.classList.remove('line-through');
    taskTitle.classList.remove('text-slate-500');
    taskCompleteButton.setAttribute('data-complete', false);
  }

  taskTitle.textContent = title;
  taskDueDate.textContent = formatDates(dueDate, 'relativeWords');
  taskDueDate.setAttribute('data-date', dueDate);
  taskPriority.setAttribute('data-priority', priority);
  priorityColor(priority, taskPriority);
}
