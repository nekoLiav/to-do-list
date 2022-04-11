import findTask from '../helpers/findTask';
import renderTaskUpdate from '../ui/renderTaskUpdate';
import updateLocalStorage from '../helpers/updateLocalStorage';
import renderSideNavInfo from '../helpers/renderSideNavInfo';

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
  task.complete = complete;

  renderTaskUpdate(title, dueDate, priority, complete, taskId);
  renderSideNavInfo();

  updateLocalStorage();
}
