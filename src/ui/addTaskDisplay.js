import { toDoList } from '../helpers/globals';
import taskEditMenu from './taskEditMenu';

export default function addTaskDisplay(id) {
  const tasks = document.querySelectorAll(`.project-tasks[data-id='${id}']`);
  const task = document.createElement('ul');
  const taskTitle = document.createElement('input');
  const taskDueDate = document.createElement('li');
  const taskPriority = document.createElement('li');
  const taskChecked = document.createElement('input');
  const projectIndex = toDoList.map((element) => element.id).indexOf(id);
  const taskIndex =
    toDoList[projectIndex].tasks[toDoList[projectIndex].tasks.length - 1];
  taskTitle.value = taskIndex.title;
  taskTitle.disabled = true;
  taskDueDate.textContent = taskIndex.dueDate;
  taskPriority.textContent = taskIndex.priority;
  taskTitle.type = 'text';
  taskChecked.type = 'checkbox';
  taskTitle.className = 'task-title';
  taskChecked.className = 'task-checked';
  taskDueDate.className = 'task-due-date';
  taskPriority.className = 'task-priority';
  taskTitle.setAttribute('data-id', taskIndex.id);
  taskDueDate.setAttribute('data-id', taskIndex.id);
  taskPriority.setAttribute('data-id', taskIndex.id);
  taskChecked.setAttribute('data-id', taskIndex.id);
  task.className =
    'flex items-center justify-between rounded hover:bg-slate-300 drop-shadow-md';
  task.setAttribute('data-id', taskIndex.id);
  task.addEventListener('click', taskEditMenu);
  task.append(taskChecked, taskTitle, taskDueDate, taskPriority);
  tasks[0].append(task);
}
