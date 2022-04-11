import { toDoList } from '../core/globals';
import renderMainProjects from '../ui/renderMainProjects';
import renderMainTasks from '../ui/renderMainTasks';
import clearView from './clearView';

export default function renderProject(projectId) {
  clearView();
  toDoList.forEach((project) => {
    if (project.id === projectId) {
      renderMainProjects(project);
      project.tasks.forEach((task) => {
        renderMainTasks(project, task);
      });
    }
  });
}
