import renderSideProject from '../ui/renderSideProject';
import renderMainProject from '../ui/renderMainProject';
import renderProjectEditUI from '../ui/renderProjectEditUI';
import populateSideInfo from './populateSideInfo';
import updateLocalStorage from './updateLocalStorage';

export default function updateProject(project) {
  populateSideInfo();
  renderSideProject(project);
  renderMainProject(project);
  renderProjectEditUI(project.id);
  updateLocalStorage();
}
