import { toDoList } from '../core/globals';

export default function retrieveLocalStorage() {
  if (localStorage.getItem('toDoList')) {
    const localProjects = JSON.parse(localStorage.getItem('toDoList'));
    localProjects.forEach((project) => {
      toDoList.push(project);
    });
  }
}
