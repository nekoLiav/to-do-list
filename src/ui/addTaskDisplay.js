import { toDoList } from '../helpers/globals';
import editTaskUI from './editTaskUI';

export default function addTaskDisplay(id) {
  const projectIndex = toDoList.map((element) => element.id).indexOf(id);
  const taskIndex =
    toDoList[projectIndex].tasks[toDoList[projectIndex].tasks.length - 1];

  const tasks = document.querySelectorAll(`.project-tasks[data-id='${id}']`);

  const task = document.createElement('ul');
  const taskTitle = document.createElement('li');
  const taskDueDate = document.createElement('li');
  const taskPriority = document.createElement('li');
  const taskChecked = document.createElement('input');

  task.setAttribute('data-id', taskIndex.id);
  taskTitle.setAttribute('data-id', taskIndex.id);
  taskDueDate.setAttribute('data-id', taskIndex.id);
  taskPriority.setAttribute('data-id', taskIndex.id);
  taskChecked.setAttribute('data-id', taskIndex.id);

  taskChecked.type = 'checkbox';

  task.className =
    'flex items-center justify-between rounded hover:bg-slate-300 drop-shadow-md task';
  taskTitle.className = 'task-title';
  taskChecked.className = 'task-checked';
  taskDueDate.className = 'task-due-date';
  taskPriority.className = 'task-priority';

  taskTitle.textContent = taskIndex.title;
  taskDueDate.textContent = taskIndex.dueDate;
  taskPriority.textContent = taskIndex.priority;

  task.addEventListener('click', editTaskUI);

  task.append(taskChecked, taskTitle, taskDueDate, taskPriority);
  tasks[0].append(task);
}
