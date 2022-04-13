// /* eslint-disable no-param-reassign */
import addProject from '../core/addProject';
import renderOverview from '../helpers/renderOverview';
import renderToday from '../helpers/renderToday';
import renderProjectEditUI from './renderProjectEditUI';
import editProject from '../core/editProject';
import deleteProject from '../core/deleteProject';
import renderProject from '../helpers/renderProject';
import renderTaskEditUI from './renderTaskEditUI';
import editTask from '../core/editTask';
import deleteTask from '../core/deleteTask';
import priorityCheck from '../helpers/priorityCheck';
import completeTask from '../core/completeTask';

export default function listeners() {
  const overviewButton = document.getElementById('overview-button');
  overviewButton.addEventListener('click', renderOverview);

  const todayButton = document.getElementById('today-button');
  todayButton.addEventListener('click', renderToday);

  const projectAddButton = document.getElementById('project-add-button');
  projectAddButton.addEventListener('click', () => addProject('New Project'));

  const sideNav = document.getElementById('side-nav');
  sideNav.addEventListener('click', (e) => {
    const projectId = parseInt(e.target.getAttribute('data-id'), 10);
    // project edit
    if (e.target.classList.contains('side-project-edit-button')) {
      renderProjectEditUI(projectId);
    }
    // project edit confirm
    if (e.target.classList.contains('confirm-project-button')) {
      editProject(projectId, document.querySelector('.edit-name').value);
      document
        .querySelector(`.project-edit-panel[data-id='${projectId}']`)
        .remove();
      document
        .querySelector(`.side-project-container[data-id='${projectId}']`)
        .classList.remove('hidden');
    }
    // project delete
    if (e.target.classList.contains('delete-project-button')) {
      deleteProject(projectId);
      document
        .querySelector(`.project-edit-panel[data-id='${projectId}']`)
        .remove();
      document
        .querySelector(`.side-project-container[data-id='${projectId}']`)
        .remove();
    }
    // project edit button toggle
    if (
      e.target.classList.contains('side-project-container') ||
      e.target.classList.contains('side-project-name')
    ) {
      document
        .querySelector(`.side-project-edit-button[data-id='${projectId}']`)
        .classList.toggle('!hidden');
      renderProject(projectId);
    }
  });
}

const taskContainer = document.getElementById('task-container');
taskContainer.addEventListener('click', (e) => {
  const projectId = parseInt(
    e.target.parentNode.parentNode.parentNode.getAttribute('data-id'),
    10
  );
  const taskId = parseInt(e.target.getAttribute('data-id'), 10);
  // task edit
  if (e.target.classList.contains('task-edit-button')) {
    renderTaskEditUI(taskId);
  }
  // task edit confirm
  if (e.target.classList.contains('confirm-task-button')) {
    editTask(
      projectId,
      taskId,
      document.querySelector(`.edit-title[data-id='${taskId}']`).value,
      document.querySelector(`.edit-due-date[data-id='${taskId}']`).value,
      priorityCheck(taskId),
      document
        .querySelector(`.task-complete-button[data-id='${taskId}']`)
        .getAttribute('data-complete')
    );
    document.querySelector(`.task-edit-panel[data-id='${taskId}']`).remove();
    document
      .querySelector(`.task-info[data-id='${taskId}']`)
      .classList.remove('hidden');
  }
  // task delete
  if (e.target.classList.contains('delete-task-button')) {
    deleteTask(projectId, taskId);
    document.querySelector(`.task-edit-panel[data-id='${taskId}']`).remove();
    document.querySelector(`.task-info[data-id='${taskId}']`).remove();
  }
  // task complete toggle
  if (
    e.target.classList.contains('task-info') ||
    e.target.classList.contains('task-title')
  ) {
    document
      .querySelector(`.task-edit-button[data-id='${taskId}']`)
      .classList.toggle('!hidden');
    document
      .querySelector(`.task-complete-button[data-id='${taskId}']`)
      .classList.toggle('!hidden');
  }
  if (e.target.classList.contains('task-complete-button')) {
    completeTask(projectId, taskId);
  }
});
