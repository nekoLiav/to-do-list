import toDoList from '../helpers/globals';

export default function populateDefaultProject() {
  const projectName = document.getElementById('project-name');
  const tasks = document.getElementById('tasks');
  projectName.setAttribute('value', `${toDoList[0].name}`);
  projectName.setAttribute('data-index', 0);
  const defaultTask = document.createElement('li');
  defaultTask.textContent = `${toDoList[0].tasks[0]}`;
  tasks.append(defaultTask);
}
