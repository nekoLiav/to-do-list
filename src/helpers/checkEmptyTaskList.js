export default function checkEmptyTaskList() {
  document.querySelectorAll('.project-tasks').forEach((element) => {
    if (element.childNodes.length === 0) {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  });
}
