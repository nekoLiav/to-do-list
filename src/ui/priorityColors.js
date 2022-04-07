export default function priorityColors(taskPriority, taskPriorityElement) {
  if (taskPriority === 'Low') {
    taskPriorityElement.classList.remove('text-red-400');
    taskPriorityElement.classList.remove('test-yellow-400');
    taskPriorityElement.classList.add('text-green-400');
  } else if (taskPriority === 'Medium') {
    taskPriorityElement.classList.remove('text-red-400');
    taskPriorityElement.classList.remove('text-green-400');
    taskPriorityElement.classList.add('text-yellow-400');
  } else if (taskPriority === 'High') {
    taskPriorityElement.classList.remove('text-green-400');
    taskPriorityElement.classList.remove('test-yellow-400');
    taskPriorityElement.classList.add('text-red-400');
  }
}
