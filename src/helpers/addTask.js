import Task from '../factories/Task';
import { toDoList } from './globals';

export default function addTask(id, title, dueDate, priority) {
  const index = toDoList.map((element) => element.id).indexOf(id);
  toDoList[index].tasks.push(new Task(title, dueDate, priority));
  console.log(toDoList);
}
