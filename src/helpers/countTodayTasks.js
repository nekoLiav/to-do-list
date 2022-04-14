import { isValid, isToday } from 'date-fns/esm';
import { toDoList } from '../core/globals';
import projectVerbiage from './projectVerbiage';
import taskVerbiage from './taskVerbiage';

export default function countTodayTasks() {
  const todayInfo = document.getElementById('today-info');

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

  todayInfo.textContent = `${todayTasksCounter} ${taskVerbiage(
    todayTasksCounter
  )} in ${todayProjectsCounter} ${projectVerbiage(todayProjectsCounter)}`;
}
