import { toDoList } from './globals';

export default function toggleChecked(name) {
  toDoList.forEach((element) => {
    if (element.name === name) {
      if (element.toDos[0].checked === false) {
        element.toDos[0].checked = true;
      } else {
        element.toDos[0].checked = false;
      }
    }
  });
}
