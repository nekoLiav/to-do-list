import { toDoList } from '../core/globals';

export default function findProject(projectId) {
  const projectIndex = toDoList.map((project) => project.id).indexOf(projectId);
  return toDoList[projectIndex];
}
