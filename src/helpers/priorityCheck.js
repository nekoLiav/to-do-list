export default function priorityCheck(taskId) {
  const priorities = document.querySelectorAll(
    `.task-priority[data-id='${taskId}']`
  );
  return priorities[0].getAttribute('data-priority');
}
