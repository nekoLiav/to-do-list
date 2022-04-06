import editProjectDisplay from '../ui/editProjectDisplay';
import { toDoList } from './globals';

export default function editProject(projectId, name) {
  const projectIndex = toDoList.map((project) => project.id).indexOf(projectId);

  toDoList[projectIndex].name = name;

  editProjectDisplay(name, projectId);

  console.log(toDoList);
}
