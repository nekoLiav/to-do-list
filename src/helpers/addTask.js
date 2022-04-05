import Task from '../factories/Task';
import { toDoList } from './globals';

export default function addTask(index, title, description, dueDate, priority) {
  toDoList[index].tasks.push(new Task(title, description, dueDate, priority));
}
