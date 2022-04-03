import toDoList from './globals';

export default function deleteProject(index) {
  toDoList.splice(index, 1);
}
