import { toDoList } from './globals';

export default function findProjectIndex(projectId) {
  return toDoList.map((project) => project.id).indexOf(projectId);
}
