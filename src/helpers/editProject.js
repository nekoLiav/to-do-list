import { toDoList } from './globals';

export default function editProject(projectId, name) {
  const index = toDoList.map((element) => element.id).indexOf(projectId);
  toDoList[index].name = name;
  console.log(toDoList);
}
