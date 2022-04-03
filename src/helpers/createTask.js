import Task from '../factories/Task';
import toDoList from './globals';

export default function createTask(name) {
  toDoList.forEach((element) => {
    if (element.name === name) {
      element.tasks.push(
        new Task('shopping', 'shopping stuff', 'soon', 'high', 'shirt', false)
      );
    }
  });
}
