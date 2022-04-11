import formatDates from '../helpers/formatDates';
import priorityColor from '../helpers/priorityColor';
import checkEmptyDueDate from '../helpers/dueDateCheck';

export default function renderTaskUpdate(
  title,
  dueDate,
  priority,
  complete,
  taskId
) {
  const taskCompleteButton = document.querySelectorAll(
    `.task-complete-button[data-id='${taskId}']`
  );
  const taskTitle = document.querySelectorAll(
    `.task-title[data-id='${taskId}']`
  );
  const taskDueDate = document.querySelectorAll(
    `.task-due-date[data-id='${taskId}']`
  );
  const taskPriority = document.querySelectorAll(
    `.task-priority[data-id='${taskId}']`
  );

  if (complete === true) {
    taskCompleteButton[0].classList.remove('text-slate-400');
    taskCompleteButton[0].classList.add('text-green-500');
    taskTitle[0].classList.add('line-through');
    taskTitle[0].classList.add('text-slate-500');
  } else {
    taskCompleteButton[0].classList.add('text-slate-400');
    taskCompleteButton[0].classList.remove('text-green-500');
    taskTitle[0].classList.remove('line-through');
    taskTitle[0].classList.remove('text-slate-500');
  }

  taskTitle[0].textContent = title;
  taskDueDate[0].textContent = formatDates(dueDate, 'relativeWords');
  taskDueDate[0].setAttribute('data-date', dueDate);
  taskPriority[0].setAttribute('data-priority', priority);
  priorityColor(priority, taskPriority[0]);
  checkEmptyDueDate(taskDueDate[0]);
}
