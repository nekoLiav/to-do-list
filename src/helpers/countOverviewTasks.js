import { toDoList } from '../core/globals';
import correctVerbiage from './correctVerbiage';

export default function countOverviewTasks() {
  const overviewInfo = document.getElementById('overview-info');

  let taskCounter = 0;
  const projectCounter = toDoList.length;

  toDoList.forEach((project) => {
    project.tasks.forEach(() => {
      taskCounter += 1;
    });
  });

  overviewInfo.textContent = `${taskCounter} ${
    correctVerbiage(taskCounter, projectCounter).taskWord
  } in ${projectCounter} ${
    correctVerbiage(taskCounter, projectCounter).projectWord
  }`;
}
