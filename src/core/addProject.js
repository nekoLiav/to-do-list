import Project from '../factories/Project';
import mostRecentProject from '../helpers/mostRecentProject';
import addProjectDisplay from '../ui/addProjectDisplay';
import updateLocalStorage from '../helpers/updateLocalStorage';
import { toDoList } from './globals';

export default function addProject(projectName) {
  toDoList.push(new Project(projectName));

  const project = mostRecentProject();

  addProjectDisplay(project.name, project.id);

  updateLocalStorage();
}
