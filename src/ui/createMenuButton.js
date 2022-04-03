import { toDoList } from '../helpers/globals';

export default function createMenuButton(projectName) {
  const menuButton = document.createElement('button');

  menuButton.id = projectName;
  menuButton.textContent = 'Menu';
}
