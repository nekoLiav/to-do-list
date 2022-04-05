import addTask from '../helpers/addTask';
import addTaskDisplay from './addTaskDisplay';

export default function taskModalOpen(e) {
  const id = parseInt(e.target.getAttribute('data-id'), 10);
  const overlayWithTaskModal = document.getElementById('overlay');
  const confirmTaskAdd = document.getElementById('confirm-task-add');
  const confirm = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    let priority;
    document.querySelectorAll('input[name="priority"]').forEach((button) => {
      if (button.checked) {
        priority = button.id;
      }
    });
    addTask(id, title, description, dueDate, priority);
    addTaskDisplay(id, title);
    confirmTaskAdd.removeEventListener('click', confirm);
    overlayWithTaskModal.classList.toggle('hidden');
  };
  confirmTaskAdd.addEventListener('click', confirm);
  overlayWithTaskModal.classList.toggle('hidden');
}
