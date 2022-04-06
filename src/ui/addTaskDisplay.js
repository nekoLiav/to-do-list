export default function addTaskDisplay(project, task) {
  const tasks = document.querySelectorAll(
    `.project-tasks[data-id='${project.id}']`
  );

  const taskInfo = document.createElement('ul');
  const taskTitle = document.createElement('li');
  const taskDueDate = document.createElement('li');
  const taskPriority = document.createElement('li');
  const taskEditButton = document.createElement('button');

  taskInfo.setAttribute('data-id', task.id);
  taskTitle.setAttribute('data-id', task.id);
  taskDueDate.setAttribute('data-id', task.id);
  taskPriority.setAttribute('data-id', task.id);
  taskEditButton.setAttribute('data-id', task.id);

  taskInfo.className = 'flex items-center gap-5 task';
  taskTitle.className = 'task-title';
  taskDueDate.className = 'task-due-date';
  taskPriority.className = 'task-priority';
  taskEditButton.className = 'task-edit-button bg-slate-300';

  taskTitle.textContent = task.title;
  taskDueDate.textContent = task.dueDate;
  taskPriority.textContent = task.priority;
  taskEditButton.textContent = 'Edit Task';

  taskInfo.append(taskTitle, taskDueDate, taskPriority, taskEditButton);
  tasks[0].append(taskInfo);
}
