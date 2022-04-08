import editTask from '../core/editTask';
import deleteTask from '../core/deleteTask';
import priorityCheck from './priorityCheck';

export default function editTaskUI(projectId, taskId) {
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
  const confirmTaskButton = document.createElement('button');
  const deleteTaskButton = document.createElement('button');
  const editTitle = document.createElement('input');
  const editDueDate = document.createElement('input');
  const editPriority = document.createElement('div');
  const priorityLow = document.createElement('input');
  const priorityMed = document.createElement('input');
  const priorityHigh = document.createElement('input');

  editTaskPanel.className = 'flex';
  confirmTaskButton.className = 'bg-slate-300';
  deleteTaskButton.className = 'bg-red-300';
  editPriority.className = 'flex items-center';

  editTitle.type = 'text';
  editDueDate.type = 'datetime-local';
  priorityLow.type = 'radio';
  priorityMed.type = 'radio';
  priorityHigh.type = 'radio';

  priorityLow.name = 'priority';
  priorityMed.name = 'priority';
  priorityHigh.name = 'priority';

  confirmTaskButton.textContent = 'Confirm Edit';
  deleteTaskButton.textContent = 'Delete Task';

  editTitle.value = taskTitle[0].textContent;
  editDueDate.value = taskDueDate[0].textContent;
  editPriority.value = taskPriority[0].textContent;

  confirmTaskButton.addEventListener('click', (e2) => {
    editTask(
      projectId,
      taskId,
      editTitle.value,
      editDueDate.value,
      priorityCheck(priorityLow, priorityMed, priorityHigh)
    );
    e2.target.parentNode.remove();
    task[0].classList.remove('hidden');
  });

  deleteTaskButton.addEventListener('click', (e3) => {
    deleteTask(projectId, taskId);
    e3.target.parentNode.remove();
    task[0].remove();
  });

  editPriority.append(priorityLow, priorityMed, priorityHigh);

  editTaskPanel.append(
    editTitle,
    editDueDate,
    editPriority,
    confirmTaskButton,
    deleteTaskButton
  );

  task[0].insertAdjacentElement('afterend', editTaskPanel);
  task[0].classList.add('hidden');
  editTitle.focus();
}
