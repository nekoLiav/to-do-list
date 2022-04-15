import { toDoList } from '../core/globals';

export default function updateLocalStorage() {
  if (localStorage.getItem('toDoList')) {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }
}
