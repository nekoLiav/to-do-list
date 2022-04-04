import addProject from '../helpers/addProject';
import addProjectUI from './addProjectUI';
import { toDoList } from '../helpers/globals';
import addTask from '../helpers/addTask';

export default function populateProjects() {
  addProject('Concert Prep');
  addTask(
    'Shopping',
    'completely new outfit',
    'soon lol',
    'high',
    'make sure to get a green shirt',
    false
  );
  toDoList.forEach((element) => {
    addProjectUI(element.name, element.tasks, toDoList.indexOf(element));
  });
}
