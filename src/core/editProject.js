import findProjectIndex from '../helpers/findProjectIndex';
import editProjectDisplay from '../ui/editProjectDisplay';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';

export default function editProject(projectId, name) {
  const projectIndex = findProjectIndex(projectId);

  toDoList[projectIndex].name = name;

  editProjectDisplay(name, projectId);

  updateLocalStorage();
}
