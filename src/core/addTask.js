import Task from '../factories/Task';
import mostRecentTask from '../helpers/mostRecentTask';
import findProject from '../helpers/findProject';
import renderTaskEditUI from '../ui/renderTaskEditUI';
import updateLocalStorage from '../helpers/updateLocalStorage';
import renderMainTasks from '../ui/renderMainTasks';
import renderSideNavInfo from '../helpers/renderSideNavInfo';

export default function addTask(projectId, title, dueDate, priority) {
  const project = findProject(projectId);

  project.tasks.push(new Task(title, dueDate, priority));

  const task = mostRecentTask(project);

  renderMainTasks(project, task);
  renderTaskEditUI(project.id, task.id);
  renderSideNavInfo();

  updateLocalStorage();
}
