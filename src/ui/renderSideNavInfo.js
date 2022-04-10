import { isToday, isValid } from 'date-fns/esm';
import { toDoList } from '../core/globals';
import countOverviewTasks from '../helpers/countOverviewTasks';

export default function renderSideNavInfo() {
  countOverviewTasks();

  const todayButton = document.getElementById('today-button');
  const quantityOfTasksToday = document.createElement('p');
  quantityOfTasksToday.className = 'text-sm';
  let todayTasksCounter = 0;
  const todayProjectsArray = [];
  toDoList.forEach((project) => {
    project.tasks.forEach((task) => {
      if (isValid(new Date(task.dueDate)) && isToday(new Date(task.dueDate))) {
        todayProjectsArray.push(project.id);
        todayTasksCounter += 1;
      }
    });
  });
  const uniqueProjects = todayProjectsArray.filter(
    (projectId, index) => todayProjectsArray.indexOf(projectId) === index
  );
  const todayProjectsCounter = uniqueProjects.length;
  quantityOfTasksToday.textContent = `${todayTasksCounter} tasks in ${todayProjectsCounter} project(s)`;
  todayButton.append(quantityOfTasksToday);
}
