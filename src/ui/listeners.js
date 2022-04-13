// /* eslint-disable no-param-reassign */
import addProject from '../core/addProject';
import renderOverview from '../helpers/renderOverview';
import renderToday from '../helpers/renderToday';
import renderProjectEditUI from './renderProjectEditUI';
import editProject from '../core/editProject';
import deleteProject from '../core/deleteProject';
import renderProject from '../helpers/renderProject';

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
    if (e.target.classList.contains('side-project-edit-button')) {
      renderProjectEditUI(projectId);
    }
    if (e.target.classList.contains('confirm-project-button')) {
      editProject(projectId, document.querySelector('.edit-name').value);
      document
        .querySelector(`.project-edit-panel[data-id='${projectId}']`)
        .remove();
      document
        .querySelector(`.side-project-container[data-id='${projectId}']`)
        .classList.remove('hidden');
    }
    if (e.target.classList.contains('delete-project-button')) {
      deleteProject(projectId);
      document
        .querySelector(`.project-edit-panel[data-id='${projectId}']`)
        .remove();
      document
        .querySelector(`.side-project-container[data-id='${projectId}']`)
        .remove();
    }
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
taskContainer.addEventListener('click', () => {});
//   document.getElementById('task-add-button').addEventListener('click', (e) => {
//     const projectId = parseInt(e.target.getAttribute('data-id'), 10);
//     addTask(projectId, 'New Task', '', 'Low', false);
//   });

//   // const mouseLeft = () => {
//   //   taskDueDate.textContent = formatDates(task.dueDate, 'relativeWords');
//   //   taskDueDate.removeEventListener('mouseleave', mouseLeft);
//   // };

//   // document.querySelectorAll('.task-due-date').forEach((element) => {
//   //   element.addEventListener('mouseenter', () => {
//   //     // element.textContent = formatDates(task.dueDate);
//   //     element.addEventListener('mouseleave', mouseLeft);
//   //   });
//   // });

//   document.querySelectorAll('.task-edit-button').forEach((button) => {
//     button.addEventListener('click', (e) => {
//       const projectId = parseInt(
//         e.target.parentNode.parentNode.getAttribute('data-id'),
//         10
//       );
//       const taskId = parseInt(e.target.getAttribute('data-id'), 10);
//       renderTaskEditUI(projectId, taskId);
//     });
//   });

//   document.querySelectorAll('.task-info').forEach((element) => {
//     element.addEventListener('click', (e) => {
//       const taskId = e.target.getAttribute('data-id');
//       document.querySelectorAll('.task-edit-button').forEach((button) => {
//         if (button.getAttribute('data-id') === taskId) {
//           button.classList.toggle('!hidden');
//         } else {
//           button.classList.add('!hidden');
//         }
//       });
//       document.querySelectorAll('.task-complete-button').forEach((button) => {
//         if (button.getAttribute('data-id') === taskId) {
//           button.classList.toggle('!hidden');
//         } else {
//           button.classList.add('!hidden');
//         }
//       });
//     });
//   });

//   document.querySelectorAll('.task-complete-button').forEach((element) => {
//     element.addEventListener('click', (e) => {
//       e.stopImmediatePropagation();
//       const projectId = parseInt(
//         e.target.parentNode.parentNode.getAttribute('data-id'),
//         10
//       );
//       const taskId = parseInt(e.target.getAttribute('data-id'), 10);
//       completeTask(projectId, taskId);
//     });
//   });

//   document.querySelectorAll('.task-complete-button').forEach((button) => {
//     button.addEventListener('click', (e2) => {
//       editTask(
//         projectId,
//         taskId,
//         editTitle.value,
//         editDueDate.value,
//         priorityCheck(taskId),
//         taskCompleteButton[0].getAttribute('data-complete')
//       );
//       e2.target.parentNode.parentNode.remove();
//       taskInfo[0].classList.remove('hidden');
//     });
//   });

//   deleteTaskButton.addEventListener('click', (e3) => {
//     deleteTask(projectId, taskId);
//     e3.target.parentNode.parentNode.remove();
//     taskInfo[0].remove();
//   });

//   actionButtons.append(confirmTaskButton, deleteTaskButton);

// confirmProjectButton.addEventListener('click', (e2) => {
//   editProject(projectId, editName.value);
//   e2.target.parentNode.parentNode.remove();
//   sideNavProject[0].classList.remove('hidden');
// });

// deleteProjectButton.addEventListener('click', (e3) => {
//   deleteProject(projectId);
//   e3.target.parentNode.parentNode.remove();
//   sideNavProject.remove();
//   if (mainViewProject !== undefined) {
//     mainViewProject.remove();
//   }
// });

// sideNavProject.addEventListener('click', (e) => {
//   const projectId = e.target.getAttribute('data-id');
//   document.querySelectorAll('.project-edit-button').forEach((button) => {
//     if (button.getAttribute('data-id') === projectId) {
//       button.classList.toggle('hidden');
//       renderProject(parseInt(projectId, 10));
//     } else {
//       button.classList.add('hidden');
//     }
//   });
// });

// sideNavProject.addEventListener('blur', (e) => {
//   e.target.classList.add('hidden');
// });
// }
