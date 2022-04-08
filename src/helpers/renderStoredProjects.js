import addProjectDisplay from '../ui/addProjectDisplay';
import addTaskDisplay from '../ui/addTaskDisplay';
import { toDoList } from '../core/globals';

export default function renderStoredProjects() {
  toDoList.forEach((project) => {
    addProjectDisplay(project);
    project.tasks.forEach((task) => {
      addTaskDisplay(project, task);
    });
  });
}
