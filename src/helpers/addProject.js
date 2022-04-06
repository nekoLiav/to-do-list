import { toDoList } from './globals';
import Project from '../factories/Project';
import addProjectDisplay from '../ui/addProjectDisplay';

export default function addProject(projectName) {
  toDoList.push(new Project(projectName));

  // Fetch most recently added project to display
  const project = toDoList[toDoList.length - 1];

  addProjectDisplay(project.name, project.id);

  console.log(toDoList);
}
