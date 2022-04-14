import Task from '../factories/Task';
import mostRecentTask from '../helpers/mostRecentTask';
import findProject from '../helpers/findProject';
import renderTaskEditUI from '../ui/renderTaskEditUI';
import updateLocalStorage from '../helpers/updateLocalStorage';
import renderMainTasks from '../ui/renderMainTasks';
import renderSideNavInfo from '../helpers/renderSideNavInfo';

export default function addTask(projectId) {
  const project = findProject(projectId);

  project.tasks.push(new Task('New Task', '', 'Low', false));

  const task = mostRecentTask(project);

  renderMainTasks(project, task);
  renderTaskEditUI(task.id);
  renderSideNavInfo();
  updateLocalStorage();
}
