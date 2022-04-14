import checkComplete from './checkComplete';
import priorityColor from './priorityColor';
import hideUnusedDate from './hideUnusedDate';
import populateSideInfo from './populateSideInfo';
import updateLocalStorage from './updateLocalStorage';

export default function updateTask(project, task) {
  const taskTitle = document.querySelector(
    `.task-title[data-task-id='${task.id}']`
  );
  const taskDueDate = document.querySelector(
    `.task-due-date[data-task-id='${task.id}']`
  );

  taskTitle.textContent = task.title;
  taskDueDate.value = task.dueDate;

  checkComplete(project.id, task.id);
  priorityColor(project.id, task.id);
  hideUnusedDate(project.id, task.id);
  populateSideInfo();
  updateLocalStorage();
}
