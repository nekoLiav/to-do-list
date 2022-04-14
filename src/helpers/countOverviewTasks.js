import { toDoList } from '../core/globals';
import projectVerbiage from './projectVerbiage';
import taskVerbiage from './taskVerbiage';

export default function countOverviewTasks() {
  const overviewInfo = document.getElementById('overview-info');

  let taskCounter = 0;
  const projectCounter = toDoList.length;

  toDoList.forEach((project) => {
    project.tasks.forEach(() => {
      taskCounter += 1;
    });
  });

  overviewInfo.textContent = `${taskCounter} ${taskVerbiage(
    taskCounter
  )} in ${projectCounter} ${projectVerbiage(projectCounter)}`;
}
