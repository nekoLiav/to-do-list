import toDoList from './globals';

export default function editProject(index, newName) {
  toDoList[index].name = newName;
}
