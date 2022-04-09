import editTaskUI from './editTaskUI';
import formatDates from '../helpers/formatDates';
import priorityColor from '../helpers/priorityColor';
import dueDateCheck from '../helpers/dueDateCheck';

export default function addTaskDisplay(project, task) {
  const tasks = document.querySelectorAll(
    `.project-tasks[data-id='${project.id}']`
  );

  const taskInfo = document.createElement('div');
  const taskTitle = document.createElement('p');
  const taskDueDate = document.createElement('p');
  const taskPriority = document.createElement('p');
  const taskEditButton = document.createElement('button');

  taskInfo.setAttribute('data-id', task.id);
  taskTitle.setAttribute('data-id', task.id);
  taskDueDate.setAttribute('data-id', task.id);
  taskPriority.setAttribute('data-id', task.id);
  taskEditButton.setAttribute('data-id', task.id);

  taskInfo.className = 'flex items-center justify-between gap-5 task';
  taskTitle.className = 'task-title';
  taskDueDate.className = 'task-due-date';
  taskPriority.className = 'task-priority';
  taskEditButton.className = 'task-edit-button bg-slate-300';

  taskTitle.textContent = task.title;
  taskDueDate.textContent = formatDates(task.dueDate, 'relativeWords');
  taskPriority.textContent = task.priority;
  taskEditButton.textContent = 'Edit Task';
  priorityColor(task.priority, taskPriority);
  dueDateCheck(taskDueDate);

  const mouseLeft = () => {
    taskDueDate.textContent = formatDates(task.dueDate, 'relativeWords');
    taskDueDate.removeEventListener('mouseleave', mouseLeft);
  };

  taskEditButton.addEventListener('click', (e) => {
    editTaskUI(
      parseInt(e.target.parentNode.parentNode.getAttribute('data-id'), 10),
      parseInt(e.target.getAttribute('data-id'), 10)
    );
  });

  taskDueDate.addEventListener('mouseenter', () => {
    taskDueDate.textContent = formatDates(task.dueDate);
    taskDueDate.addEventListener('mouseleave', mouseLeft);
  });

  taskInfo.append(taskTitle, taskDueDate, taskPriority, taskEditButton);
  tasks[0].append(taskInfo);
}
