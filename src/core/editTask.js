import firebaseSetProject from '../firebase/firebaseSetProject';
import findProject from '../helpers/findProject';
import findTask from '../helpers/findTask';
import updateTask from '../helpers/updateTask';

export default function editTask(
  projectId,
  taskId,
  title,
  dueDate,
  priority,
  complete
) {
  const project = findProject(projectId);
  const task = findTask(projectId, taskId);

  task.title = title;
  task.dueDate = dueDate;
  task.priority = priority;

  if (complete === 'false') {
    task.complete = false;
  } else if (complete === 'true') {
    task.complete = true;
  }

  firebaseSetProject(project);
  updateTask(project, task);
}
