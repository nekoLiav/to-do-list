export default function clearView() {
  const taskContainer = Array.from(
    document.getElementById('task-container').children
  );
  taskContainer.forEach((child) => {
    child.remove();
  });
}
