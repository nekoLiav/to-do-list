import findProject from '../helpers/findProject';
import findTask from '../helpers/findTask';
import populateSideInfo from '../helpers/populateSideInfo';
import firebaseSetProject from '../firebase/firebaseSetProject';

export default function deleteTask(projectId, taskId) {
  const project = findProject(projectId);
  const task = findTask(projectId, taskId);

  project.tasks.splice(project.tasks.indexOf(task), 1);

  firebaseSetProject(project);
  populateSideInfo();
}
