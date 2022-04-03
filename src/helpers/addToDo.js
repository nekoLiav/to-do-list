import ToDo from '../factories/ToDo';
import { toDoList } from './globals';

export default function addToDo(name) {
  toDoList.forEach((element) => {
    if (element.name === name) {
      element.toDos.push(
        new ToDo('shopping', 'shopping stuff', 'soon', 'high', 'shirt', false)
      );
    }
  });
}
