export default function hideUnusedDates() {
  document.querySelectorAll('.task-due-date').forEach((element) => {
    if (element.getAttribute('data-date') === '') {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  });
}
