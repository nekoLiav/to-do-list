import { toDoList } from './globals';
import Project from '../factories/Project';

export default function addProject(name) {
  toDoList.push(new Project(name));
  console.log(toDoList);
}
