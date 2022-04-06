import { toDoList } from './globals';

export default function deleteProject(projectId) {
  const projectIndex = toDoList.map((project) => project.id).indexOf(projectId);

  toDoList.splice(projectIndex, 1);

  console.log(toDoList);
}
