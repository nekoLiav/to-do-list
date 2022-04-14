import { toDoList } from '../core/globals';
import renderMainProject from '../ui/renderMainProject';
import renderMainTask from '../ui/renderMainTask';
import clearView from './clearView';

export default function populateProject(projectId) {
  clearView();
  toDoList.forEach((project) => {
    if (project.id === projectId) {
      renderMainProject(project);
      project.tasks.forEach((task) => {
        renderMainTask(project, task);
      });
    }
  });
}
