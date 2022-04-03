export default function closeProjectMenu() {
  const projectMenu = document.getElementById('project-menu-dropdown');
  if (!projectMenu.classList.contains('hidden')) {
    projectMenu.classList.toggle('hidden');
  }
}
