import addTask from '../core/addTask';

export default function addTaskUI(e) {
  const projectId = parseInt(e.target.getAttribute('data-id'), 10);
  addTask(projectId, 'Title', '', 'Priority');
}
