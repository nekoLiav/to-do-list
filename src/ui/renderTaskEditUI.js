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

  const editTaskPanel = document.createElement('div');
  const actionButtons = document.createElement('div');
  const confirmTaskButton = document.createElement('button');
  const deleteTaskButton = document.createElement('button');
  const editTitle = document.createElement('input');
  const editDueDate = document.createElement('input');
  const editPriority = document.createElement('div');
  const priorityLow = document.createElement('input');
  const priorityMed = document.createElement('input');
  const priorityHigh = document.createElement('input');

  editTaskPanel.className = 'flex items-center gap-5 p-1 rounded bg-slate-200';
  actionButtons.className = 'flex gap-1';
  editTitle.className = 'mr-auto text-sm rounded max-h-5';
  editDueDate.className = 'text-sm rounded';
  editPriority.className = 'flex items-center justify-center gap-5';
  confirmTaskButton.className =
    'flex items-center justify-center w-8 h-6 p-2 text-green-500 rounded active:bg-slate-800 hover:bg-slate-600 bg-slate-700 fa-solid fa-circle-check';
  deleteTaskButton.className =
    'flex items-center justify-center w-8 h-6 p-2 text-red-500 rounded active:bg-slate-800 hover:bg-slate-600 bg-slate-700 fa-solid fa-trash-can';

  editTitle.type = 'text';
  editDueDate.type = 'datetime-local';
  priorityLow.type = 'radio';
  priorityMed.type = 'radio';
  priorityHigh.type = 'radio';

  priorityLow.name = 'priority';
  priorityMed.name = 'priority';
  priorityHigh.name = 'priority';

  priorityLow.id = 'Low';
  priorityMed.id = 'Medium';
  priorityHigh.id = 'High';

  editTitle.value = taskTitle[0].textContent;
  editDueDate.value = taskDueDate[0].getAttribute('data-date');

  confirmTaskButton.addEventListener('click', (e2) => {
    editTask(
      projectId,
      taskId,
      editTitle.value,
      editDueDate.value,
      priorityCheck(projectId, taskId)
    );
    e2.target.parentNode.parentNode.remove();
    task[0].classList.remove('hidden');
  });

  deleteTaskButton.addEventListener('click', (e3) => {
    deleteTask(projectId, taskId);
    e3.target.parentNode.parentNode.remove();
    task[0].remove();
  });

  editPriority.append(priorityLow, priorityMed, priorityHigh);

  actionButtons.append(confirmTaskButton, deleteTaskButton);

  editTaskPanel.append(editTitle, editDueDate, editPriority, actionButtons);

  task[0].insertAdjacentElement('afterend', editTaskPanel);

  const prioritySelectors = document.querySelectorAll(`input[name='priority']`);
  prioritySelectors.forEach((selector) => {
    if (taskPriority[0].getAttribute('data-priority') === selector.id) {
      const selectedPriority = selector;
      selectedPriority.checked = true;
    }
  });

  task[0].classList.add('hidden');
  editTitle.focus();
}
