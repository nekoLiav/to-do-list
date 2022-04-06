import editProjectDisplay from '../ui/editProjectDisplay';
import findProjectIndex from '../helpers/findProjectIndex';
import { toDoList } from './globals';

export default function editProject(projectId, name) {
  const projectIndex = findProjectIndex(projectId);

  toDoList[projectIndex].name = name;

  editProjectDisplay(name, projectId);

  console.log(toDoList);
}
