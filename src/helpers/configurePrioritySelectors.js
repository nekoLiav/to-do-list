import priorityCheck from './priorityCheck';

export default function configurePrioritySelectors(taskId) {
  const prioritySelector = document.getElementById(`${priorityCheck(taskId)}`);
  prioritySelector.classList.remove('!hidden');
  prioritySelector.setAttribute('data-selected', true);
}
