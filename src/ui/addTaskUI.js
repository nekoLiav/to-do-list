import addTask from '../core/addTask';

export default function addTaskUI(projectId) {
  addTask(projectId, 'New Task', '', 'Low');
}
