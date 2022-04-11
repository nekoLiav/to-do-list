import findTask from '../helpers/findTask';
import renderTaskUpdate from '../ui/renderTaskUpdate';
import updateLocalStorage from '../helpers/updateLocalStorage';
import renderSideNavInfo from '../helpers/renderSideNavInfo';

export default function editTask(projectId, taskId, title, dueDate, priority) {
  const task = findTask(projectId, taskId);

  task.title = title;
  task.dueDate = dueDate;
  task.priority = priority;

  renderTaskUpdate(title, dueDate, priority, taskId);
  renderSideNavInfo();

  updateLocalStorage();
}
