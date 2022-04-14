import findProject from '../helpers/findProject';
import renderProjectUpdate from '../ui/renderProjectUpdate';
import updateLocalStorage from '../helpers/updateLocalStorage';
import renderSideInfo from '../helpers/renderSideInfo';

export default function editProject(projectId, name) {
  const project = findProject(projectId);

  project.name = name;

  renderProjectUpdate(name, projectId);
  renderSideInfo();
  updateLocalStorage();
}
