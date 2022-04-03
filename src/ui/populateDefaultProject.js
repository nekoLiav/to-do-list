import { toDoList } from '../helpers/globals';

export default function populateDefaultProject() {
  const project = document.getElementById('project-name');
  const tasks = document.getElementById('tasks');
  project.setAttribute('placeholder', `${toDoList[0].name}`);
  project.setAttribute('data-index', 0);
  const defaultTask = document.createElement('li');
  defaultTask.textContent = `${toDoList[0].tasks[0]}`;
  tasks.append(defaultTask);
}
