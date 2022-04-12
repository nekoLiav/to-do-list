export default function priorityColor() {
  document.querySelectorAll('.task-priority').forEach((element) => {
    const priority = element.getAttribute('data-priority');
    if (priority === 'Low') {
      element.classList.remove('text-red-500');
      element.classList.remove('text-yellow-500');
      element.classList.add('text-green-500');
    } else if (priority === 'Medium') {
      element.classList.remove('text-red-500');
      element.classList.remove('text-green-500');
      element.classList.add('text-yellow-500');
    } else if (priority === 'High') {
      element.classList.remove('text-green-500');
      element.classList.remove('text-yellow-500');
      element.classList.add('text-red-500');
    }
  });
}
