import { toDoList } from '../helpers/globals';
import addProjectDisplay from './addProjectDisplay';

export default function renderSavedProjects() {
  toDoList.forEach((toDo) => {
    addProjectDisplay(toDo.name, toDo.tasks, toDo.id);
  });
}
