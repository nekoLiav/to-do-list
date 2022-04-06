import { toDoList } from '../helpers/globals';
import taskEditMenu from './taskEditMenu';

export default function addTaskDisplay(id) {
  const tasks = document.querySelectorAll(`.project-tasks[data-id='${id}']`);
  const task = document.createElement('ul');
  const taskTitle = document.createElement('li');
  const taskDueDate = document.createElement('li');
  const taskPriority = document.createElement('li');
  const taskChecked = document.createElement('input');
  const projectIndex = toDoList.map((element) => element.id).indexOf(id);
  const taskIndex =
    toDoList[projectIndex].tasks[toDoList[projectIndex].tasks.length - 1];
  taskTitle.textContent = taskIndex.title;
  taskDueDate.textContent = taskIndex.dueDate;
  taskPriority.textContent = taskIndex.priority;
  taskChecked.type = 'checkbox';
  task.className =
    'flex items-center justify-between rounded hover:bg-slate-300 drop-shadow-md';
  task.setAttribute('data-id', taskIndex.id);
  task.addEventListener('click', taskEditMenu);
  task.append(taskTitle, taskDueDate, taskPriority, taskChecked);
  tasks[0].append(task);
}
