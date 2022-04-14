import { toDoList } from './globals';
import findProject from '../helpers/findProject';

export default function deleteProject(projectId) {
  const project = findProject(projectId);
  toDoList.splice(toDoList.indexOf(project), 1);
}
