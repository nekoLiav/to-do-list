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
  taskDueDate.setAttribute('data-date', task.dueDate);
  taskPriority.setAttribute('data-id', task.id);
  taskPriority.setAttribute('data-priority', task.priority);
  taskEditButton.setAttribute('data-id', task.id);

  taskInfo.className =
    'flex items-center gap-5 p-1 text-sm rounded cursor-pointer hover:bg-slate-100 active:bg-slate-300 bg-slate-200 task';
  taskTitle.className = 'mr-auto task-title';
  taskDueDate.className = 'text-xs task-due-date place-self-center';
  taskPriority.className =
    ' task-priority place-self-center fa-solid fa-circle';
  taskEditButton.className =
    'hidden w-8 h-6 p-1 text-white rounded active:bg-slate-800 hover:bg-slate-600 task-edit-button fa-solid bg-slate-700 fa-pen-to-square';

  taskTitle.textContent = task.title;
  taskDueDate.textContent = formatDates(task.dueDate, 'relativeWords');
  priorityColor(task.priority, taskPriority);
  dueDateCheck(taskDueDate);

  const mouseLeft = () => {
    taskDueDate.textContent = formatDates(task.dueDate, 'relativeWords');
    taskDueDate.removeEventListener('mouseleave', mouseLeft);
  };

  taskEditButton.addEventListener('click', (e) => {
    const projectId = parseInt(
      e.target.parentNode.parentNode.getAttribute('data-id'),
      10
    );
    const taskId = parseInt(e.target.getAttribute('data-id'), 10);
    renderTaskEditUI(projectId, taskId);
  });

  taskDueDate.addEventListener('mouseenter', () => {
    taskDueDate.textContent = formatDates(task.dueDate);
    taskDueDate.addEventListener('mouseleave', mouseLeft);
  });

  taskInfo.addEventListener('click', (e) => {
    const taskId = e.target.getAttribute('data-id');
    document.querySelectorAll('.task-edit-button').forEach((button) => {
      if (button.getAttribute('data-id') === taskId) {
        button.classList.toggle('hidden');
      } else {
        button.classList.add('hidden');
      }
    });
  });

  taskInfo.append(taskTitle, taskDueDate, taskPriority, taskEditButton);
  tasks[0].append(taskInfo);
}
