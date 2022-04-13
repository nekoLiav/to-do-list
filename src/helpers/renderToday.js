import { isValid, isToday } from 'date-fns/esm';
import { toDoList } from '../core/globals';
import clearView from './clearView';
import renderMainProjects from '../ui/renderMainProjects';
import renderMainTasks from '../ui/renderMainTasks';

export default function renderToday() {
  clearView();
  toDoList.forEach((project) => {
    project.tasks.forEach((task) => {
      if (isValid(new Date(task.dueDate)) && isToday(new Date(task.dueDate))) {
        const projectDupeCheck = document.querySelector(
          `.project-container[data-id='${project.id}']`
        );
        if (projectDupeCheck === undefined) {
          renderMainProjects(project);
        }
        renderMainTasks(project, task);
      }
    });
  });
}
