import editTask from '../helpers/editTask';
import deleteTask from '../helpers/deleteTask';

export default function editTaskUI(e) {
  const projectId = parseInt(
    e.target.parentNode.parentNode.getAttribute('data-id'),
    10
  );
  const taskId = parseInt(e.target.getAttribute('data-id'), 10);

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
  const editPriority = document.createElement('input');

  editTaskPanel.className = 'flex';
  confirmTaskButton.className = 'bg-slate-300';
  deleteTaskButton.className = 'bg-red-300';

  editTitle.type = 'text';
  editDueDate.type = 'text';
  editPriority.type = 'text';

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
      editPriority.value
    );
    e2.target.parentNode.remove();
    task[0].classList.remove('hidden');
  });

  deleteTaskButton.addEventListener('click', (e3) => {
    deleteTask(projectId, taskId);
    e3.target.parentNode.remove();
    task[0].remove();
  });

  editTaskPanel.append(
    editTitle,
    editDueDate,
    editPriority,
    confirmTaskButton,
    deleteTaskButton
  );

  task[0].insertAdjacentElement('afterend', editTaskPanel);
  task[0].classList.add('hidden');
}
