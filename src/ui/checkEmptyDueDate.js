export default function checkEmptyDueDate(dueDate) {
  if (dueDate.textContent === '') {
    dueDate.classList.add('hidden');
  } else {
    dueDate.classList.remove('hidden');
  }
}
