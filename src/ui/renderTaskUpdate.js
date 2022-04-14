import formatDates from '../helpers/formatDates';
import checkComplete from '../helpers/checkComplete';
import priorityColor from '../helpers/priorityColor';
import hideUnusedDates from '../helpers/hideUnusedDates';

export default function renderTaskUpdate(
  title,
  dueDate,
  priority,
  complete,
  taskId,
  projectId
) {
  const taskTitle = document.querySelector(
    `.task-title[data-task-id='${taskId}']`
  );
  const taskDueDate = document.querySelector(
    `.task-due-date[data-task-id='${taskId}']`
  );
  const taskPriority = document.querySelector(
    `.task-priority[data-task-id='${taskId}']`
  );
  const taskCompleteButton = document.querySelector(
    `.task-complete-button[data-task-id='${taskId}']`
  );

  taskTitle.textContent = title;
  taskTitle.classList.toggle('line-through');
  taskDueDate.textContent = formatDates(dueDate, 'relative');
  taskDueDate.setAttribute('data-date', dueDate);
  taskPriority.setAttribute('data-priority', priority);
  taskCompleteButton.setAttribute('data-complete', complete);
  taskCompleteButton.classList.toggle('text-slate-400');
  taskCompleteButton.classList.toggle('text-green-500');

  checkComplete();
  priorityColor(projectId, taskId);
  hideUnusedDates();
}
