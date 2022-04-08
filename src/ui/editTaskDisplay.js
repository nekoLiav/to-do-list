import formatDates from './formatDates';
import priorityColor from './priorityColor';
import checkEmptyDueDate from './checkEmptyDueDate';

export default function editTaskDisplay(title, dueDate, priority, taskId) {
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
  taskPriority[0].textContent = priority;
  taskDueDate[0].textContent = formatDates(dueDate, 'relativeWords');
  taskDueDate[0].setAttribute('data-date', dueDate);
  priorityColor(priority, taskPriority[0]);
  checkEmptyDueDate(taskDueDate[0]);
}
