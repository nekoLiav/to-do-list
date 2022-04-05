import { toDoList } from './globals';

export default function editProject(id, newName) {
  const index = toDoList.map((element) => element.id).indexOf(id);
  toDoList[index].name = newName;
  console.log(toDoList);
}
