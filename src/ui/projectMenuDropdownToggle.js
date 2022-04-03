export default function projectMenuDropdownToggle() {
  const projectMenuButton = document.getElementById('project-menu-button');
  const projectMenuDropdown = document.getElementById('project-menu-dropdown');
  projectMenuButton.addEventListener('click', () => {
    projectMenuDropdown.classList.toggle('hidden');
  });
}
