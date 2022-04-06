import addProject from '../helpers/addProject';
import addProjectDisplay from './addProjectDisplay';
import { toDoList } from '../helpers/globals';

export default function addProjectUI() {
  addProject('New Project');
  const projectIndex = toDoList[toDoList.length - 1];
  addProjectDisplay(projectIndex.name, '', projectIndex.id);
}
