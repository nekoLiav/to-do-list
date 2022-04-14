// /* eslint-disable no-param-reassign */
import addProject from '../core/addProject';
import populateOverview from '../helpers/populateOverview';
import populateToday from '../helpers/populateToday';
import renderProjectEditUI from './renderProjectEditUI';
import editProject from '../core/editProject';
import deleteProject from '../core/deleteProject';
import populateProject from '../helpers/populateProject';
import renderTaskEditUI from './renderTaskEditUI';
import editTask from '../core/editTask';
import deleteTask from '../core/deleteTask';
import toggleTaskComplete from '../helpers/toggleTaskComplete';
import addTask from '../core/addTask';
import priorityCheck from '../helpers/priorityCheck';

export default function listeners() {
  const overviewButton = document.getElementById('overview-button');
  const todayButton = document.getElementById('today-button');
  const projectAddButton = document.getElementById('project-add-button');
  const side = document.getElementById('side');
  const main = document.getElementById('main');

  overviewButton.addEventListener('click', populateOverview);

  todayButton.addEventListener('click', populateToday);

  projectAddButton.addEventListener('click', () => addProject('New Project'));

  side.addEventListener('click', (e) => {
    const projectId = parseInt(e.target.getAttribute('data-project-id'), 10);
    // project elements
    const projectContainer = document.querySelector(
      `.project-container[data-project-id='${projectId}']`
    );
    const projectEditPanel = document.querySelector(
      `.project-edit-panel[data-project-id='${projectId}']`
    );
    const editName = document.querySelector('.edit-name');
    const sideProjectContainer = document.querySelector(
      `.side-project-container[data-project-id='${projectId}']`
    );
    const sideProjectEditButton = document.querySelector(
      `.side-project-edit-button[data-project-id='${projectId}']`
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
      populateProject(projectId);
    }
  });

  main.addEventListener('click', (e) => {
    const projectId = parseInt(e.target.getAttribute('data-project-id'), 10);
    const taskId = parseInt(e.target.getAttribute('data-task-id'), 10);
    // task elements
    const editTitle = document.querySelector(
      `.edit-title[data-task-id='${taskId}']`
    );
    const editDueDate = document.querySelector(
      `.edit-due-date[data-task-id='${taskId}']`
    );
    const taskCompleteButton = document.querySelector(
      `.task-complete-button[data-task-id='${taskId}']`
    );
    const taskEditPanel = document.querySelector(
      `.task-edit-panel[data-task-id='${taskId}']`
    );
    const taskContainer = document.querySelector(
      `.task-container[data-task-id='${taskId}']`
    );
    const taskEditButton = document.querySelector(
      `.task-edit-button[data-task-id='${taskId}']`
    );
    const priorityLow = document.querySelector(
      `.low[data-task-id='${taskId}']`
    );
    const priorityMedium = document.querySelector(
      `.medium[data-task-id='${taskId}']`
    );
    const priorityHigh = document.querySelector(
      `.high[data-task-id='${taskId}']`
    );
    // task edit
    if (e.target.classList.contains('task-edit-button')) {
      renderTaskEditUI(projectId, taskId);
    }
    // task edit confirm
    if (e.target.classList.contains('confirm-task-button')) {
      editTask(
        projectId,
        taskId,
        editTitle.value,
        editDueDate.value,
        priorityCheck(projectId, taskId)
      );
      taskEditPanel.remove();
      document
        .querySelector(`.task-container[data-task-id='${taskId}']`)
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
      toggleTaskComplete(projectId, taskId);
    }
    // task priority toggle
    if (e.target.classList.contains('priority-selector')) {
      if (e.target.classList.contains('low')) {
        e.target.classList.add('!hidden');
        e.target.setAttribute('data-selected', false);
        priorityMedium.classList.remove('!hidden');
        priorityMedium.setAttribute('data-selected', true);
      } else if (e.target.classList.contains('medium')) {
        e.target.classList.add('!hidden');
        e.target.setAttribute('data-selected', false);
        priorityHigh.classList.remove('!hidden');
        priorityHigh.setAttribute('data-selected', true);
      } else if (e.target.classList.contains('high')) {
        e.target.classList.add('!hidden');
        e.target.setAttribute('data-selected', false);
        priorityLow.classList.remove('!hidden');
        priorityLow.setAttribute('data-selected', true);
      }
    }
    if (e.target.classList.contains('task-add-button')) {
      addTask(parseInt(e.target.getAttribute('data-project-id'), 10));
    }
  });
}
