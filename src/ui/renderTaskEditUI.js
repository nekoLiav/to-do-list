import Element from '../factories/Element';
import configurePrioritySelectors from '../helpers/configurePrioritySelectors';
import styles from './tailwind';

export default function renderTaskEditUI(projectId, taskId) {
  const taskContainer = document.querySelector(
    `.task-container[data-task-id='${taskId}']`
  );
  const taskTitle = document.querySelector(
    `.task-title[data-task-id='${taskId}']`
  );
  const taskDueDate = document.querySelector(
    `.task-due-date[data-task-id='${taskId}']`
  );

  const taskEdit = Element(
    'div',
    {
      class: styles.editTaskPanel,
      'data-task-id': taskId,
      'data-project-id': projectId,
    },
    Element('input', {
      class: styles.editTitle,
      'data-task-id': taskId,
      'data-project-id': projectId,
      type: 'text',
      value: taskTitle.textContent,
    }),
    Element('input', {
      class: styles.editDueDate,
      'data-task-id': taskId,
      'data-project-id': projectId,
      type: 'datetime-local',
      value: taskDueDate.getAttribute('data-date'),
    }),
    Element('button', {
      class: styles.priorityLow,
      'data-task-id': taskId,
      'data-project-id': projectId,
    }),
    Element('button', {
      class: styles.priorityMed,
      'data-task-id': taskId,
      'data-project-id': projectId,
    }),
    Element('button', {
      class: styles.priorityHigh,
      'data-task-id': taskId,
      'data-project-id': projectId,
    }),
    Element(
      'div',
      { class: styles.taskEditActionButtons },
      Element('button', {
        class: styles.confirmTaskButton,
        'data-task-id': taskId,
        'data-project-id': projectId,
      }),
      Element('button', {
        class: styles.deleteTaskButton,
        'data-task-id': taskId,
        'data-project-id': projectId,
      })
    )
  );

  taskContainer.insertAdjacentElement('afterend', taskEdit);

  taskContainer.classList.add('hidden');

  configurePrioritySelectors(projectId, taskId);
  document.querySelector(`.edit-title[data-task-id='${taskId}']`).focus();
}
