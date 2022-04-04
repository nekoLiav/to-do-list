import Task from '../factories/Task';
import { toDoList } from './globals';

export default function addTask(...args) {
  toDoList[1].tasks.push(new Task(...args));
}
