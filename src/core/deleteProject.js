import findProjectIndex from '../helpers/findProjectIndex';
import { toDoList } from './globals';

export default function deleteProject(projectId) {
  toDoList.splice(findProjectIndex(projectId), 1);

  console.log(toDoList);
}
