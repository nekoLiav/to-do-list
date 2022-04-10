import { toDoList } from '../core/globals';
import renderMainProjects from '../ui/renderMainProjects';
import renderMainTasks from '../ui/renderMainTasks';
import clearView from './clearView';

export default function renderOverview() {
  clearView();
  toDoList.forEach((project) => {
    renderMainProjects(project);
    project.tasks.forEach((task) => {
      renderMainTasks(project, task);
    });
  });
}
