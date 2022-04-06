import editTask from '../helpers/editTask';

export default function taskEditMenu(e) {
  const projectId = parseInt(
    e.target.parentNode.parentNode.getAttribute('data-id'),
    10
  );
  const taskId = parseInt(e.target.getAttribute('data-id'), 10);
  const taskTitle = document.querySelectorAll(
    `.task-title[data-id='${taskId}']`
  );
  const taskDueDate = document.querySelectorAll(
    `.task-due-date[data-id='${taskId}']`
  );
  const taskPriority = document.querySelectorAll(
    `.task-checked[data-id='${taskId}']`
  );
  const taskChecked = document.querySelectorAll(
    `.task-checked[data-id='${taskId}']`
  );
  const setNewTitle = () => {
    editTask(
      projectId,
      taskId,
      taskTitle[0].value,
      taskDueDate[0].value,
      taskPriority[0].value,
      taskChecked[0].value
    );
    taskTitle[0].disabled = true;
    taskTitle[0].removeEventListener('blur', setNewTitle);
  };
  taskTitle[0].disabled = false;
  taskTitle[0].focus();
  taskTitle[0].addEventListener('blur', setNewTitle);
}
