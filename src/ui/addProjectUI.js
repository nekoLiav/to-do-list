import addProject from '../helpers/addProject';
import addProjectDisplay from './addProjectDisplay';
import { toDoList } from '../helpers/globals';

export default function addProjectUI() {
  addProject('New Project');
  const project = toDoList[toDoList.length - 1];
  addProjectDisplay(project.name, project.id);
}
