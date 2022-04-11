export default function priorityColor(taskPriority, taskPriorityElement) {
  if (taskPriority === 'Low') {
    taskPriorityElement.classList.remove('text-red-500');
    taskPriorityElement.classList.remove('text-yellow-500');
    taskPriorityElement.classList.add('text-green-500');
  } else if (taskPriority === 'Medium') {
    taskPriorityElement.classList.remove('text-red-500');
    taskPriorityElement.classList.remove('text-green-500');
    taskPriorityElement.classList.add('text-yellow-500');
  } else if (taskPriority === 'High') {
    taskPriorityElement.classList.remove('text-green-500');
    taskPriorityElement.classList.remove('text-yellow-500');
    taskPriorityElement.classList.add('text-red-500');
  }
}
