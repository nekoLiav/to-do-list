export default function addTaskDisplay(id, title) {
  const tasks = document.querySelectorAll(`.project-tasks[data-id='${id}']`);
  const task = document.createElement('li');
  task.textContent = title;
  task.className = 'rounded hover:bg-slate-300 drop-shadow-md';
  tasks[0].append(task);
}
