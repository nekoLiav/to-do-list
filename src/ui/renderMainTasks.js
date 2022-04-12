import formatDates from '../helpers/formatDates';
import Element from '../factories/Element';
import { tailwind } from './tailwind';

export default function renderMainTasks(project, task) {
  const tasks = document.querySelectorAll(
    `.project-tasks[data-id='${project.id}']`
  );

  const mainTasks = Element(
    'div',
    {
      class: tailwind.taskInfo,
      'data-id': task.id,
    },
    Element('button', {
      class: tailwind.taskCompleteButton,
      'data-id': task.id,
      'data-complete': task.complete,
    }),
    Element(
      'p',
      {
        class: tailwind.taskTitle,
        'data-id': task.id,
      },
      task.title
    ),
    Element(
      'p',
      {
        class: tailwind.taskDueDate,
        'data-id': task.id,
        'data-date': task.dueDate,
      },
      formatDates(task.dueDate, 'relativeWords')
    ),
    Element('p', {
      class: tailwind.taskPriority,
      'data-id': task.id,
      'data-priority': task.priority,
    }),
    Element('button', { class: tailwind.taskEditButton, 'data-id': task.id })
  );

  // if (task.complete === true) {
  //   taskTitle.classList.add('line-through');
  //   taskTitle.classList.add('text-slate-500');
  //   taskCompleteButton.classList.add('text-green-500');
  //   taskCompleteButton.classList.remove('text-slate-400');
  // } else {
  //   taskTitle.classList.remove('line-through');
  //   taskTitle.classList.remove('text-slate-500');
  //   taskCompleteButton.classList.remove('text-green-500');
  //   taskCompleteButton.classList.add('text-slate-400');
  // }

  // const mouseLeft = () => {
  //   taskDueDate.textContent = formatDates(task.dueDate, 'relativeWords');
  //   taskDueDate.removeEventListener('mouseleave', mouseLeft);
  // };

  // taskEditButton.addEventListener('click', (e) => {
  //   const projectId = parseInt(
  //     e.target.parentNode.parentNode.getAttribute('data-id'),
  //     10
  //   );
  //   const taskId = parseInt(e.target.getAttribute('data-id'), 10);
  //   renderTaskEditUI(projectId, taskId);
  // });

  // taskDueDate.addEventListener('mouseenter', () => {
  //   taskDueDate.textContent = formatDates(task.dueDate);
  //   taskDueDate.addEventListener('mouseleave', mouseLeft);
  // });

  // taskInfo.addEventListener('click', (e) => {
  //   const taskId = e.target.getAttribute('data-id');
  //   document.querySelectorAll('.task-edit-button').forEach((button) => {
  //     if (button.getAttribute('data-id') === taskId) {
  //       button.classList.toggle('!hidden');
  //     } else {
  //       button.classList.add('!hidden');
  //     }
  //   });
  //   document.querySelectorAll('.task-complete-button').forEach((button) => {
  //     if (button.getAttribute('data-id') === taskId) {
  //       button.classList.toggle('!hidden');
  //     } else {
  //       button.classList.add('!hidden');
  //     }
  //   });
  // });

  // taskCompleteButton.addEventListener('click', (e) => {
  //   e.stopImmediatePropagation();
  //   const projectId = parseInt(
  //     e.target.parentNode.parentNode.getAttribute('data-id'),
  //     10
  //   );
  //   const taskId = parseInt(e.target.getAttribute('data-id'), 10);
  //   completeTask(projectId, taskId);
  // });

  tasks[0].append(mainTasks);
}
