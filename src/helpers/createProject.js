import toDoList from './globals';
import Project from '../factories/Project';

export default function createProject(name) {
  toDoList.push(new Project(name));
}
