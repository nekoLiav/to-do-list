// /* eslint-disable no-param-reassign */
// import addTask from '../core/addTask';
// import renderTaskEditUI from './renderTaskEditUI';
// import completeTask from '../core/completeTask';

// export default function listeners() {
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
// }
