import { toDoList } from '../core/globals';

export default function countOverviewTasks() {
  const overviewInfo = document.getElementById('overview-info');

  let taskCounter = 0;

  toDoList.forEach((project) => {
    project.tasks.forEach(() => {
      taskCounter += 1;
    });
  });

  overviewInfo.textContent = `${taskCounter} tasks in ${toDoList.length} project(s)`;
}
