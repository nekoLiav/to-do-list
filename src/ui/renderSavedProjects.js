import { toDoList } from '../helpers/globals';
import addProjectDisplay from './addProjectDisplay';

export default function renderSavedProjects() {
  toDoList.forEach((toDo, index) => {
    addProjectDisplay(toDo.name, toDo.tasks, index);
  });
}
