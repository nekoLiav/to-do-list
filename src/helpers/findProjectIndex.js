import { toDoList } from '../core/globals';

export default function findProjectIndex(projectId) {
  return toDoList.map((project) => project.id).indexOf(projectId);
}
