import checkEmptyTaskList from './checkEmptyTaskList';
import populateSideInfo from './populateSideInfo';
import updateLocalStorage from './updateLocalStorage';

export default function updateProject(project) {
  const projectName = document.querySelector(
    `.project-name[data-project-id='${project.id}']`
  );

  projectName.textContent = project.name;

  checkEmptyTaskList(project.id);
  populateSideInfo();
  updateLocalStorage();
}
