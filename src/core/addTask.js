import Task from '../factories/Task';
import mostRecentTask from '../helpers/mostRecentTask';
import findProject from '../helpers/findProject';
import renderTaskEditUI from '../ui/renderTaskEditUI';
import renderMainTask from '../ui/renderMainTask';

export default function addTask(projectId) {
  const project = findProject(projectId);

  project.tasks.push(new Task('New Task', '', 'low', false));

  const task = mostRecentTask(project);

  renderMainTask(project, task);
  renderTaskEditUI(project.id, task.id);
}
