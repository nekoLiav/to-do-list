import addTask from '../core/addTask';

export default function addTaskUI(projectId) {
  addTask(projectId, 'Title', '', 'Priority');
}
