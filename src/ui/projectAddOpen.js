import addProject from '../helpers/addProject';
import addProjectDisplay from './addProjectDisplay';
import { toDoList } from '../helpers/globals';

export default function projectAddOpen() {
  addProject();
  const { id } = toDoList[toDoList.length - 1];
  addProjectDisplay('', '', id);
}
