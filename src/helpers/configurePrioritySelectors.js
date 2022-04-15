import priorityCheck from './priorityCheck';

export default function configurePrioritySelectors(projectId, taskId) {
  const prioritySelector = document.querySelector(
    `.priority-selector[data-priority='${priorityCheck(projectId, taskId)}']`
  );
  prioritySelector.classList.remove('!hidden');
  prioritySelector.setAttribute('data-selected', true);
}
