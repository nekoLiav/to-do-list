import { toDoList } from './globals';
import Project from '../factories/Project';
import addProjectDisplay from '../ui/addProjectDisplay';

export default function addProject(name) {
  toDoList.push(new Project(name));
  // Update UI with new project information
  const project = toDoList[toDoList.length - 1];
  addProjectDisplay(project.name, project.id);

  console.log(toDoList);
}
