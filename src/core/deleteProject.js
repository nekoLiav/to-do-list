import findProject from '../helpers/findProject';
import renderSideInfo from '../helpers/renderSideInfo';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';

export default function deleteProject(projectId) {
  const project = findProject(projectId);
  toDoList.splice(toDoList.indexOf(project), 1);

  renderSideInfo();
  updateLocalStorage();
}
