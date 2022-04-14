import Project from '../factories/Project';
import mostRecentProject from '../helpers/mostRecentProject';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';
import renderProjectEditUI from '../ui/renderProjectEditUI';
import renderSideProjects from '../ui/renderSideProjects';
import renderSideInfo from '../helpers/renderSideInfo';
import renderMainProjects from '../ui/renderMainProjects';

export default function addProject(projectName) {
  toDoList.push(new Project(projectName));

  const project = mostRecentProject();

  renderSideProjects(project);
  renderMainProjects(project);
  renderProjectEditUI(project.id);
  renderSideInfo();
  updateLocalStorage();
}
