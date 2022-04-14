import { toDoList } from '../core/globals';
import projectVerbiage from './projectVerbiage';
import taskVerbiage from './taskVerbiage';

export default function countOverviewTasks() {
  const overviewInfo = document.getElementById('overview-info');

  const totalProjects = toDoList.length;
  const totalTasks = () => {
    let counter = 0;
    toDoList.forEach((project) => {
      project.tasks.forEach(() => {
        counter += 1;
      });
    });
    return counter;
  };

  overviewInfo.textContent = `${totalTasks()} ${taskVerbiage(
    totalTasks()
  )} in ${totalProjects} ${projectVerbiage(totalProjects)}`;
}
