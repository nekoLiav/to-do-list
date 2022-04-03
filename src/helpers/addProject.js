import toDoList from './toDoList';
import Project from '../factories/Project';

export default function addProject(name) {
  toDoList.push(new Project(name));
}
