import projectMenuOpen from './projectMenuOpen';

export default function createStaticListeners() {
  const projectMenuButton = document.getElementById('project-menu-button');
  projectMenuButton.addEventListener('click', projectMenuOpen);
}
