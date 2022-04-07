import findTask from '../helpers/findTask';
import editTaskDisplay from '../ui/editTaskDisplay';
import updateLocalStorage from '../helpers/updateLocalStorage';

export default function editTask(projectId, taskId, title, dueDate, priority) {
  const task = findTask(projectId, taskId);

  task.title = title;
  task.dueDate = dueDate;
  task.priority = priority;

  editTaskDisplay(title, dueDate, priority, taskId);

  updateLocalStorage();
}
