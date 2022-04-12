import formatDates from '../helpers/formatDates';
import priorityColor from '../helpers/priorityColor';
import dueDateCheck from '../helpers/dueDateCheck';
import renderTaskEditUI from './renderTaskEditUI';
import completeTask from '../core/completeTask';

export default function renderMainTasks(project, task) {
  const tasks = document.querySelectorAll(
    `.project-tasks[data-id='${project.id}']`
  );

  const taskInfo = document.createElement('div');
  const taskCompleteButton = document.createElement('button');
  const taskTitle = document.createElement('p');
  const taskDueDate = document.createElement('p');
  const taskPriority = document.createElement('p');
  const taskEditButton = document.createElement('button');

  taskInfo.setAttribute('data-id', task.id);
  taskCompleteButton.setAttribute('data-id', task.id);
  taskCompleteButton.setAttribute('data-complete', task.complete);
  taskTitle.setAttribute('data-id', task.id);
  taskDueDate.setAttribute('data-id', task.id);
  taskDueDate.setAttribute('data-date', task.dueDate);
  taskPriority.setAttribute('data-id', task.id);
  taskPriority.setAttribute('data-priority', task.priority);
  taskEditButton.setAttribute('data-id', task.id);

  taskInfo.className =
    'flex items-center gap-5 p-1 rounded cursor-pointer hover:bg-slate-100 active:bg-slate-300 bg-slate-200 task';
  taskCompleteButton.className =
    '!hidden w-8 h-6 rounded text-slate-400 task-complete-button bg-slate-700 fa-solid fa-circle-check';
  taskTitle.className = 'mr-auto text-sm task-title';
  taskDueDate.className =
    'flex items-center h-full text-xs task-due-date place-self-center';
  taskPriority.className =
    'mr-1 text-sm task-priority place-self-center fa-solid fa-flag';
  taskEditButton.className =
    '!hidden w-8 h-6 p-1 text-sm text-white rounded active:bg-slate-800 hover:bg-slate-600 task-edit-button fa-solid bg-slate-700 fa-pen-to-square';

  if (task.complete === true) {
    taskTitle.classList.add('line-through');
    taskTitle.classList.add('text-slate-500');
    taskCompleteButton.classList.add('text-green-500');
    taskCompleteButton.classList.remove('text-slate-400');
    taskCompleteButton.setAttribute('data-complete', true);
  } else {
    taskTitle.classList.remove('line-through');
    taskTitle.classList.remove('text-slate-500');
    taskCompleteButton.classList.remove('text-green-500');
    taskCompleteButton.classList.add('text-slate-400');
    taskCompleteButton.setAttribute('data-complete', false);
  }

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
        button.classList.toggle('!hidden');
      } else {
        button.classList.add('!hidden');
      }
    });
    document.querySelectorAll('.task-complete-button').forEach((button) => {
      if (button.getAttribute('data-id') === taskId) {
        button.classList.toggle('!hidden');
      } else {
        button.classList.add('!hidden');
      }
    });
  });

  taskCompleteButton.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    const projectId = parseInt(
      e.target.parentNode.parentNode.getAttribute('data-id'),
      10
    );
    const taskId = parseInt(e.target.getAttribute('data-id'), 10);
    completeTask(projectId, taskId);
  });

  taskInfo.append(
    taskCompleteButton,
    taskTitle,
    taskDueDate,
    taskPriority,
    taskEditButton
  );
  tasks[0].append(taskInfo);
}
