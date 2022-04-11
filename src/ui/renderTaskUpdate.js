import formatDates from '../helpers/formatDates';
import priorityColor from '../helpers/priorityColor';
import checkEmptyDueDate from '../helpers/dueDateCheck';

export default function renderTaskUpdate(title, dueDate, priority, taskId) {
  const taskTitle = document.querySelectorAll(
    `.task-title[data-id='${taskId}']`
  );
  const taskDueDate = document.querySelectorAll(
    `.task-due-date[data-id='${taskId}']`
  );
  const taskPriority = document.querySelectorAll(
    `.task-priority[data-id='${taskId}']`
  );

  taskTitle[0].textContent = title;
  taskDueDate[0].textContent = formatDates(dueDate, 'relativeWords');
  taskDueDate[0].setAttribute('data-date', dueDate);
  taskPriority[0].setAttribute('data-priority', priority);
  priorityColor(priority, taskPriority[0]);
  checkEmptyDueDate(taskDueDate[0]);
}