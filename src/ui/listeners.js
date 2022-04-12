import addTask from '../core/addTask';

export default function listeners() {
  document.getElementById('task-add-button').addEventListener('click', (e) => {
    const projectId = parseInt(e.target.getAttribute('data-id'), 10);
    addTask(projectId, 'New Task', '', 'Low', false);
  });
}
