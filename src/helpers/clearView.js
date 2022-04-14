export default function clearView() {
  const taskContainer = Array.from(document.getElementById('main').children);
  taskContainer.forEach((child) => {
    child.remove();
  });
}
