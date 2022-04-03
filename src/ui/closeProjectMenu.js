export default function closeProjectMenu() {
  const projectMenu = document.getElementById('project-menu');
  if (!projectMenu.classList.contains('hidden')) {
    projectMenu.classList.toggle('hidden');
  }
}
