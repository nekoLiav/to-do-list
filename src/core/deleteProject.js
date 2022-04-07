import findProjectIndex from '../helpers/findProjectIndex';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';

export default function deleteProject(projectId) {
  toDoList.splice(findProjectIndex(projectId), 1);

  updateLocalStorage();
}
