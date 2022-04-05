import { toDoList } from './globals';

export default function deleteProject(id) {
  const index = toDoList.map((element) => element.id).indexOf(id);
  toDoList.splice(index, 1);
  console.log(toDoList);
}
