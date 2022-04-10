import Project from '../factories/Project';
import mostRecentProject from '../helpers/mostRecentProject';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';
import renderProjectEditUI from '../ui/renderProjectEditUI';
import renderSideNavProjects from '../ui/renderSideNavProjects';

export default function addProject(projectName) {
  toDoList.push(new Project(projectName));

  const project = mostRecentProject();

  renderSideNavProjects(project);
  renderProjectEditUI(project.id);

  updateLocalStorage();
}
