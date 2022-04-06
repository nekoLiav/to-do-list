import addProjectDisplay from './addProjectDisplay';
import addTaskDisplay from './addTaskDisplay';
import { toDoList } from '../core/globals';

export default function renderStoredProjects() {
  toDoList.forEach((project) => {
    addProjectDisplay(project.name, project.id);
    project.tasks.forEach((task) => {
      addTaskDisplay(project, task);
    });
  });
}
