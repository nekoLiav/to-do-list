import Task from '../factories/Task';
import mostRecentTask from '../helpers/mostRecentTask';
import findProject from '../helpers/findProject';
import addTaskDisplay from '../ui/renderMainTasks';
import renderTaskEditUI from '../ui/renderTaskEditUI';
import updateLocalStorage from '../helpers/updateLocalStorage';

export default function addTask(projectId, title, dueDate, priority) {
  const project = findProject(projectId);

  project.tasks.push(new Task(title, dueDate, priority));

  const task = mostRecentTask(project);

  addTaskDisplay(project, task);
  renderTaskEditUI(project.id, task.id);

  updateLocalStorage();
}
