import formatDates from '../helpers/formatDates';
import priorityColor from '../helpers/priorityColor';
import dueDateCheck from '../helpers/dueDateCheck';
import renderTaskEditUI from './renderTaskEditUI';

export default function renderMainTasks(project, task) {
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

  taskInfo.className =
    'grid items-center text-sm rounded auto-cols-fr bg-slate-200 task';
  taskTitle.className = 'col-span-3 col-start-1 ml-1 task-title';
  taskDueDate.className = 'col-start-4 text-xs task-due-date place-self-center';
  taskPriority.className = 'col-start-5 task-priority place-self-center';
  taskEditButton.className =
    'col-start-6 p-1 rounded place-self-end task-edit-button w-max bg-slate-200';

  taskTitle.textContent = task.title;
  taskDueDate.textContent = formatDates(task.dueDate, 'relativeWords');
  taskPriority.textContent = task.priority;
  taskEditButton.textContent = 'Edit';
  priorityColor(task.priority, taskPriority);
  dueDateCheck(taskDueDate);

  const mouseLeft = () => {
    taskDueDate.textContent = formatDates(task.dueDate, 'relativeWords');
    taskDueDate.removeEventListener('mouseleave', mouseLeft);
  };

  taskEditButton.addEventListener('click', (e) => {
    renderTaskEditUI(
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
