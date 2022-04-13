import formatDates from '../helpers/formatDates';
import priorityColor from '../helpers/priorityColor';

export default function renderTaskUpdate(
  title,
  dueDate,
  priority,
  complete,
  taskId
) {
  const taskTitle = document.querySelector(`.task-title[data-id='${taskId}']`);
  const taskDueDate = document.querySelector(
    `.task-due-date[data-id='${taskId}']`
  );
  const taskPriority = document.querySelector(
    `.task-priority[data-id='${taskId}']`
  );

  taskTitle.textContent = title;
  taskDueDate.textContent = formatDates(dueDate, 'relativeWords');
  taskDueDate.setAttribute('data-date', dueDate);
  taskPriority.setAttribute('data-priority', priority);
  priorityColor(priority, taskPriority);
}
