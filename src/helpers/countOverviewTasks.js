import { toDoList } from '../core/globals';

export default function countOverviewTasks() {
  const overviewButton = document.getElementById('overview-button');

  let taskCounter = 0;

  toDoList.forEach((project) => {
    project.tasks.forEach(() => {
      taskCounter += 1;
    });
  });

  const infoOverview = document.createElement('p');

  infoOverview.className = 'text-sm';

  infoOverview.textContent = `${taskCounter} tasks in ${toDoList.length} project(s)`;

  overviewButton.append(infoOverview);
}
