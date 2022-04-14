import Task from '../factories/Task';
import mostRecentTask from '../helpers/mostRecentTask';
import findProject from '../helpers/findProject';
import renderTaskEditUI from '../ui/renderTaskEditUI';
import updateLocalStorage from '../helpers/updateLocalStorage';
import renderMainTasks from '../ui/renderMainTasks';
import populateSideInfo from '../helpers/populateSideInfo';

export default function addTask(projectId) {
  const project = findProject(projectId);

  project.tasks.push(new Task('New Task', '', 'low', false));

  const task = mostRecentTask(project);

  renderMainTasks(project, task);
  renderTaskEditUI(projectId, task.id);
  populateSideInfo();
  updateLocalStorage();
}
