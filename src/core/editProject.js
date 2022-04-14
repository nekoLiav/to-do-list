import findProject from '../helpers/findProject';
import renderProjectUpdate from '../ui/renderProjectUpdate';
import updateLocalStorage from '../helpers/updateLocalStorage';
import populateSideInfo from '../helpers/populateSideInfo';

export default function editProject(projectId, name) {
  const project = findProject(projectId);

  project.name = name;

  renderProjectUpdate(name, projectId);
  populateSideInfo();
  updateLocalStorage();
}
