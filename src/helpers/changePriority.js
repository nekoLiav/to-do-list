import { toDoList } from './globals';

export default function changePriority(name, priority) {
  toDoList.forEach((element) => {
    if (element.name === name) {
      element.toDos[0].priority = priority;
    }
  });
}
