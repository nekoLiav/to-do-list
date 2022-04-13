export default function checkComplete() {
  document.querySelectorAll('.task-complete-button').forEach((element) => {
    const taskId = element.getAttribute('data-id');
    if (element.getAttribute('data-complete') === 'true') {
      element.classList.remove('text-slate-400');
      element.classList.add('text-green-500');
      document
        .querySelector(`.task-title[data-id='${taskId}']`)
        .classList.add('line-through');
    } else {
      document
        .querySelector(`.task-title[data-id='${taskId}']`)
        .classList.remove('line-through');
      element.classList.remove('text-green-500');
      element.classList.add('text-slate-400');
    }
  });
}
