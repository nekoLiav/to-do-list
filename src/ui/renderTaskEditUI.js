import editTask from '../core/editTask';
import deleteTask from '../core/deleteTask';
import priorityCheck from '../helpers/priorityCheck';

export default function renderTaskEditUI(projectId, taskId) {
  const task = document.querySelectorAll(`.task[data-id='${taskId}'`);
  const taskTitle = document.querySelectorAll(
    `.task-title[data-id='${taskId}'`
  );
  const taskDueDate = document.querySelectorAll(
    `.task-due-date[data-id='${taskId}']`
  );
  const taskPriority = document.querySelectorAll(
    `.task-priority[data-id='${taskId}']`
  );
  const taskCompleteButton = document.querySelectorAll(
    `.task-complete-button[data-id='${taskId}']`
  );

  const editTaskPanel = document.createElement('div');
  const actionButtons = document.createElement('div');
  const confirmTaskButton = document.createElement('button');
  const deleteTaskButton = document.createElement('button');
  const editTitle = document.createElement('input');
  const editDueDate = document.createElement('input');
  const priorityLow = document.createElement('button');
  const priorityMed = document.createElement('button');
  const priorityHigh = document.createElement('button');

  editTaskPanel.className =
    'flex items-center justify-between p-1 text-sm rounded bg-slate-200';
  actionButtons.className = 'flex gap-0.5';
  editTitle.className = 'w-40 text-sm rounded max-h-5';
  editDueDate.className = 'w-40 text-xs rounded max-h-5';
  priorityLow.className =
    '!hidden w-8 h-6 p-1 text-green-500 rounded priority-selector fa-solid fa-flag bg-slate-700';
  priorityMed.className =
    '!hidden w-8 h-6 p-1 text-yellow-500 rounded priority-selector fa-solid fa-flag bg-slate-700';
  priorityHigh.className =
    '!hidden w-8 h-6 p-1 text-red-500 rounded priority-selector fa-solid fa-flag bg-slate-700';
  confirmTaskButton.className =
    'w-8 h-6 p-1 text-green-500 rounded active:bg-slate-800 hover:bg-slate-600 bg-slate-700 fa-solid fa-circle-check';
  deleteTaskButton.className =
    'w-8 h-6 p-1 text-red-500 rounded active:bg-slate-800 hover:bg-slate-600 bg-slate-700 fa-solid fa-trash-can';

  priorityLow.id = 'Low';
  priorityMed.id = 'Med';
  priorityHigh.id = 'High';

  priorityLow.setAttribute('data-id', taskId);
  priorityMed.setAttribute('data-id', taskId);
  priorityHigh.setAttribute('data-id', taskId);

  editTitle.type = 'text';
  editDueDate.type = 'datetime-local';

  editTitle.value = taskTitle[0].textContent;
  editDueDate.value = taskDueDate[0].getAttribute('data-date');

  confirmTaskButton.addEventListener('click', (e2) => {
    editTask(
      projectId,
      taskId,
      editTitle.value,
      editDueDate.value,
      priorityCheck(taskId),
      taskCompleteButton[0].getAttribute('data-complete')
    );
    e2.target.parentNode.parentNode.remove();
    task[0].classList.remove('hidden');
  });

  deleteTaskButton.addEventListener('click', (e3) => {
    deleteTask(projectId, taskId);
    e3.target.parentNode.parentNode.remove();
    task[0].remove();
  });

  actionButtons.append(confirmTaskButton, deleteTaskButton);

  editTaskPanel.append(
    editTitle,
    editDueDate,
    priorityLow,
    priorityMed,
    priorityHigh,
    actionButtons
  );

  task[0].insertAdjacentElement('afterend', editTaskPanel);

  const prioritySelectors = document.querySelectorAll('.priority-selector');
  const prioritySelected = taskPriority[0].getAttribute('data-priority');
  prioritySelectors.forEach((selector) => {
    if (selector.id === prioritySelected) {
      selector.classList.remove('!hidden');
    }
  });

  task[0].classList.add('hidden');
  editTitle.focus();
}
