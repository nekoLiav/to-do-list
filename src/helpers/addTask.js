import Task from '../factories/Task';
import toDoList from './globals';

export default function addTask(name) {
  toDoList.forEach((element) => {
    if (element.name === name) {
      element.tasks.push(
        new Task('shopping', 'shopping stuff', 'soon', 'high', 'shirt', false)
      );
    }
  });
}
