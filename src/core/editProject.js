import firebaseSetProject from '../firebase/firebaseSetProject';
import findProject from '../helpers/findProject';
import updateProject from '../helpers/updateProject';

export default function editProject(projectId, name) {
  const project = findProject(projectId);

  project.name = name;

  firebaseSetProject(project);
  updateProject(project);
}
