import { isValid, isToday } from 'date-fns/esm';
import { toDoList } from '../core/globals';
import clearView from './clearView';
import renderMainProject from '../ui/renderMainProject';
import renderMainTasks from '../ui/renderMainTask';

export default function populateToday() {
  clearView();
  toDoList.forEach((project) => {
    project.tasks.forEach((task) => {
      if (isValid(new Date(task.dueDate)) && isToday(new Date(task.dueDate))) {
        const projectDupeCheck = document.querySelector(
          `.project-container[data-project-id='${project.id}']`
        );
        if (projectDupeCheck === undefined || projectDupeCheck === null) {
          renderMainProject(project);
        }
        renderMainTask(project, task);
      }
    });
  });
}
