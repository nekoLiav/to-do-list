import { toDoList } from './globals';

export default function editProject(projectId, name) {
  const projectIndex = toDoList.map((project) => project.id).indexOf(projectId);

  toDoList[projectIndex].name = name;

  console.log(toDoList);
}
