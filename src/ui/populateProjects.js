import { toDoList } from '../helpers/globals';
import addProjectUI from './addProjectUI';

export default function populateProjects() {
  toDoList.forEach((element) => {
    addProjectUI(element.name, element.tasks);
  });
}
