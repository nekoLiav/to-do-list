import addProjectUI from './addProjectUI';
import { toDoList } from '../helpers/globals';

export default function populateExistingProjects() {
  // addProject('Concert Prep');
  // addTask(
  //   'Shopping',
  //   'completely new outfit',
  //   'soon lol',
  //   'high',
  //   'make sure to get a green shirt',
  //   false
  // );
  toDoList.forEach((element) => {
    addProjectUI(element.name, element.tasks, toDoList.indexOf(element));
  });
}
