import { toDoList } from './globals';
import Project from '../factories/Project';
import mostRecentProject from '../helpers/mostRecentProject';
import updateProject from '../helpers/updateProject';

export default function addProject(projectName) {
  toDoList.push(new Project(projectName));

  updateProject(mostRecentProject());
}
