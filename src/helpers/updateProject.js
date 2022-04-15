import checkEmptyTaskList from './checkEmptyTaskList';
import populateSideInfo from './populateSideInfo';
import updateLocalStorage from '../local-storage/updateLocalStorage';

export default function updateProject(project) {
  const sideProjectName = document.querySelector(
    `.side-project-name[data-project-id='${project.id}']`
  );

  sideProjectName.textContent = project.name;

  checkEmptyTaskList(project.id);
  populateSideInfo();
  updateLocalStorage();
}
