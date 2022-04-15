import { toDoList } from './globals';
import Project from '../factories/Project';
import mostRecentProject from '../helpers/mostRecentProject';
import renderSideProject from '../ui/renderSideProject';
import renderProjectEditUI from '../ui/renderProjectEditUI';

export default function addProject(projectName) {
  toDoList.push(new Project(projectName));

  renderSideProject(mostRecentProject());
  renderProjectEditUI(mostRecentProject().id);
}
