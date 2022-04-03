import { toDoList } from '../helpers/globals';

export default function populateDefaultProject() {
  const project = document.getElementById('project-name');
  const tasks = document.getElementById('tasks');
  project.textContent = `${toDoList[0].name}`;
  const defaultTask = document.createElement('li');
  defaultTask.textContent = `${toDoList[0].tasks[0]}`;
  tasks.append(defaultTask);
}
