import editTask from '../helpers/editTask';

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

  const editTaskPanel = document.createElement('ul');
  const confirmTaskEditButton = document.createElement('button');
  const deleteTaskButton = document.createElement('button');
  const editTitleInput = document.createElement('input');
  const editTitle = document.createElement('li');
  const editDueDate = document.createElement('li');
  const editDueDateInput = document.createElement('input');
  const editPriority = document.createElement('li');
  const editPriorityInput = document.createElement('input');

  editTaskPanel.className = 'flex justify-between';
  confirmTaskEditButton.className = 'p-1 bg-slate-300';
  deleteTaskButton.className = 'p-1 bg-red-300';

  editTitleInput.type = 'text';
  editDueDateInput.type = 'text';
  editPriorityInput.type = 'text';

  confirmTaskEditButton.textContent = 'Confirm Edit';
  deleteTaskButton.textContent = 'Delete Task';

  editTitleInput.value = taskTitle[0].textContent;
  editDueDateInput.value = taskDueDate[0].textContent;
  editPriorityInput.value = taskPriority[0].textContent;

  confirmTaskEditButton.addEventListener('click', (e2) => {
    editTask(
      projectId,
      taskId,
      editTitleInput.value,
      editDueDateInput.value,
      editPriorityInput.value
    );
    taskTitle[0].textContent = editTitleInput.value;
    taskDueDate[0].textContent = editDueDateInput.value;
    taskPriority[0].textContent = editPriorityInput.value;
    e2.target.parentNode.remove();
    task[0].classList.toggle('hidden');
  });

  deleteTaskButton.addEventListener('click', (e3) => {
    e3.target.parentNode.remove();
    task[0].remove();
  });

  editTitle.append(editTitleInput);
  editDueDate.append(editDueDateInput);
  editPriority.append(editPriorityInput);
  editTaskPanel.append(
    confirmTaskEditButton,
    editTitle,
    editDueDate,
    editPriority,
    deleteTaskButton
  );

  task[0].insertAdjacentElement('afterend', editTaskPanel);
  task[0].classList.toggle('hidden');
}
