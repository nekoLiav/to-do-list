import findProject from '../helpers/findProject';
import editProjectDisplay from '../ui/editProjectDisplay';
import updateLocalStorage from '../helpers/updateLocalStorage';

export default function editProject(projectId, name) {
  const project = findProject(projectId);

  project.name = name;

  editProjectDisplay(name, projectId);

  updateLocalStorage();
}
