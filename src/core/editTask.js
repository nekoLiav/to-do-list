import findTask from '../helpers/findTask';
import renderTaskUpdate from '../ui/renderTaskUpdate';
import updateLocalStorage from '../helpers/updateLocalStorage';
import populateSideInfo from '../helpers/populateSideInfo';

export default function editTask(
  projectId,
  taskId,
  title,
  dueDate,
  priority,
  complete
) {
  const task = findTask(projectId, taskId);

  task.title = title;
  task.dueDate = dueDate;
  task.priority = priority;

  if (complete === 'false') {
    task.complete = false;
  } else if (complete === 'true') {
    task.complete = true;
  }

  renderTaskUpdate(title, dueDate, priority, complete, taskId, projectId);
  populateSideInfo();
  updateLocalStorage();
}
