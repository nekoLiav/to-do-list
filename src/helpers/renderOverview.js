import { toDoList } from '../core/globals';
import addProjectDisplay from '../ui/addProjectDisplay';
import addTaskDisplay from '../ui/addTaskDisplay';
import clearView from './clearView';

export default function renderOverview() {
  clearView();
  toDoList.forEach((project) => {
    addProjectDisplay(project);
    project.tasks.forEach((task) => {
      addTaskDisplay(project, task);
    });
  });
}
