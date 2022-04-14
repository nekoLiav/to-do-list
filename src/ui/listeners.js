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
import completeTask from '../core/completeTask';
import addTask from '../core/addTask';

export default function listeners() {
  const overviewButton = document.getElementById('overview-button');
  const todayButton = document.getElementById('today-button');
  const projectAddButton = document.getElementById('project-add-button');
  const side = document.getElementById('side');
  const main = document.getElementById('main');

  overviewButton.addEventListener('click', renderOverview);
  todayButton.addEventListener('click', renderToday);
  projectAddButton.addEventListener('click', () => addProject('New Project'));
  side.addEventListener('click', (e) => {
    const projectId = parseInt(e.target.getAttribute('data-id'), 10);
    // project elements
    const projectContainer = document.querySelector(
      `.project-container[data-id='${projectId}']`
    );
    const projectEditPanel = document.querySelector(
      `.project-edit-panel[data-id='${projectId}']`
    );
    const editName = document.querySelector('.edit-name');
    const sideProjectContainer = document.querySelector(
      `.side-project-container[data-id='${projectId}']`
    );
    const sideProjectEditButton = document.querySelector(
      `.side-project-edit-button[data-id='${projectId}']`
    );
    // project edit
    if (e.target.classList.contains('side-project-edit-button')) {
      renderProjectEditUI(projectId);
    }
    // project edit confirm
    if (e.target.classList.contains('confirm-project-button')) {
      editProject(projectId, editName.value);
      projectEditPanel.remove();
      sideProjectContainer.classList.remove('hidden');
    }
    // project delete
    if (e.target.classList.contains('delete-project-button')) {
      deleteProject(projectId);
      projectContainer.remove();
      projectEditPanel.remove();
      sideProjectContainer.remove();
    }
    // project edit button toggle
    if (
      e.target.classList.contains('side-project-container') ||
      e.target.classList.contains('side-project-name')
    ) {
      sideProjectEditButton.classList.toggle('!hidden');
      renderProject(projectId);
    }
  });
  main.addEventListener('click', (e) => {
    const projectId = parseInt(
      e.target.parentNode.parentNode.parentNode.getAttribute('data-id'),
      10
    );
    const taskId = parseInt(e.target.getAttribute('data-id'), 10);
    // task elements
    const editTitle = document.querySelector(
      `.edit-title[data-id='${taskId}']`
    );
    const editDueDate = document.querySelector(
      `.edit-due-date[data-id='${taskId}']`
    );
    const prioritySelectorSelected = document.querySelector(
      '.priority-selector[data-selected="true"]'
    );
    const taskCompleteButton = document.querySelector(
      `.task-complete-button[data-id='${taskId}']`
    );
    const taskEditPanel = document.querySelector(
      `.task-edit-panel[data-id='${taskId}']`
    );
    const taskContainer = document.querySelector(
      `.task-container[data-id='${taskId}']`
    );
    const taskEditButton = document.querySelector(
      `.task-edit-button[data-id='${taskId}']`
    );
    const priorityLow = document.querySelector(`#Low[data-id='${taskId}']`);
    const priorityMedium = document.querySelector(
      `#Medium[data-id='${taskId}']`
    );
    const priorityHigh = document.querySelector(`#High[data-id='${taskId}']`);
    // task edit
    if (e.target.classList.contains('task-edit-button')) {
      renderTaskEditUI(taskId);
    }
    // task edit confirm
    if (e.target.classList.contains('confirm-task-button')) {
      editTask(
        projectId,
        taskId,
        editTitle.value,
        editDueDate.value,
        prioritySelectorSelected.id,
        taskCompleteButton.getAttribute('data-complete')
      );
      taskEditPanel.remove();
      document
        .querySelector(`.task-container[data-id='${taskId}']`)
        .classList.remove('hidden');
    }
    // task delete
    if (e.target.classList.contains('delete-task-button')) {
      deleteTask(projectId, taskId);
      taskEditPanel.remove();
      taskContainer.remove();
    }
    // task complete toggle
    if (
      e.target.classList.contains('task-container') ||
      e.target.classList.contains('task-title') ||
      e.target.classList.contains('task-due-date')
    ) {
      taskEditButton.classList.toggle('!hidden');
      taskCompleteButton.classList.toggle('!hidden');
    }
    if (e.target.classList.contains('task-complete-button')) {
      completeTask(projectId, taskId);
    }
    // task priority toggle
    if (e.target.classList.contains('priority-selector')) {
      if (e.target.id === 'Low') {
        e.target.classList.add('!hidden');
        e.target.setAttribute('data-selected', false);
        priorityMedium.classList.remove('!hidden');
        priorityMedium.setAttribute('data-selected', true);
      } else if (e.target.id === 'Medium') {
        e.target.classList.add('!hidden');
        e.target.setAttribute('data-selected', false);
        priorityHigh.classList.remove('!hidden');
        priorityHigh.setAttribute('data-selected', true);
      } else if (e.target.id === 'High') {
        e.target.classList.add('!hidden');
        e.target.setAttribute('data-selected', false);
        priorityLow.classList.remove('!hidden');
        priorityLow.setAttribute('data-selected', true);
      }
    }
    if (e.target.classList.contains('task-add-button')) {
      addTask(parseInt(e.target.getAttribute('data-id'), 10));
    }
  });
}
