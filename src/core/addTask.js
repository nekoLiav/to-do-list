import Task from '../factories/Task';
import mostRecentTask from '../helpers/mostRecentTask';
import findProject from '../helpers/findProject';
import addTaskDisplay from '../ui/addTaskDisplay';
import editTaskUI from '../ui/editTaskUI';
import updateLocalStorage from '../helpers/updateLocalStorage';

export default function addTask(projectId, title, dueDate, priority) {
  const project = findProject(projectId);

  project.tasks.push(new Task(title, dueDate, priority));

  const task = mostRecentTask(project);

  addTaskDisplay(project, task);
  editTaskUI(project.id, task.id);

  updateLocalStorage();
}
