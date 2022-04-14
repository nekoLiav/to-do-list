import { toDoList } from '../core/globals';
import clearView from './clearView';
import renderMainProject from '../ui/renderMainProject';
import renderMainTask from '../ui/renderMainTask';

export default function populateOverview() {
  clearView();
  toDoList.forEach((project) => {
    renderMainProject(project);
    project.tasks.forEach((task) => {
      renderMainTask(project, task);
    });
  });
}
