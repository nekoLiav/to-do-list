import { toDoList } from '../helpers/globals';

export default function updateProjectName(index) {
  const projectName = document.getElementById('project-name');

  projectName.textContent = toDoList[index].name;
}
