export default function clearView() {
  const mainViewProjects = document.querySelectorAll('.project-container');

  mainViewProjects.forEach((element) => {
    element.remove();
  });
}
