import { toDoList } from './globals';
import findProject from '../helpers/findProject';
import updateProject from '../helpers/updateProject';

export default function deleteProject(projectId) {
  const project = findProject(projectId);
  toDoList.splice(toDoList.indexOf(project), 1);

  updateProject();
}
