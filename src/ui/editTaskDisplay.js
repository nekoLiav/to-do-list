import { isValid, formatDistanceToNowStrict } from 'date-fns/esm';
import priorityColors from './priorityColors';

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
  if (isValid(new Date(dueDate))) {
    taskDueDate[0].textContent = formatDistanceToNowStrict(new Date(dueDate), {
      addSuffix: true,
    });
  }
  priorityColors(priority, taskPriority[0]);
  taskPriority[0].textContent = priority;
}
