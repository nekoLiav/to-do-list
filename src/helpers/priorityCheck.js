export default function priorityCheck() {
  const priorities = document.querySelectorAll(`input[name='priority']`);
  let priorityText;
  priorities.forEach((priority) => {
    if (priority.checked) {
      priorityText = priority.id;
    }
  });
  return priorityText;
}
