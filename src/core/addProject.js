import Project from '../factories/Project';
import mostRecentProject from '../helpers/mostRecentProject';
import renderSideProject from '../ui/renderSideProject';
import renderProjectEditUI from '../ui/renderProjectEditUI';
import renderMainProject from '../ui/renderMainProject';
import firebaseSetProject from '../firebase/firebaseSetProject';

export default async function addProject(projectName) {
  const newProject = new Project(projectName);

  firebaseSetProject(newProject);
  renderSideProject(mostRecentProject());
  renderMainProject(mostRecentProject());
  renderProjectEditUI(mostRecentProject().id);
}
