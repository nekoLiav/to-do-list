import { toDoList } from './globals';
import Project from '../factories/Project';

export default function addProject() {
  toDoList.push(new Project());
  console.log(toDoList);
}
