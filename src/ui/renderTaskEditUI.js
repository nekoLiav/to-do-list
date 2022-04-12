import Element from '../factories/Element';
import styles from './tailwind';

export default function renderTaskEditUI(taskId) {
  const taskInfo = document.querySelector(`.task-Info[data-id='${taskId}'`);
  const taskTitle = document.querySelector(`.task-title[data-id='${taskId}'`);
  const taskDueDate = document.querySelector(
    `.task-due-date[data-id='${taskId}']`
  );

  const taskEdit = Element(
    'div',
    { class: styles.editTaskPanel },
    Element('input', {
      class: styles.editTitle,
      type: 'text',
      value: taskTitle.textContent,
    }),
    Element('input', {
      class: styles.editDueDate,
      value: taskDueDate.getAttribute('data-date'),
      type: 'datetime-local',
    }),
    Element('button', {
      id: 'Low',
      class: styles.priorityLow,
      'data-id': taskId,
    }),
    Element('button', {
      id: 'Med',
      class: styles.priorityMed,
      'data-id': taskId,
    }),
    Element('button', {
      id: 'High',
      class: styles.priorityHigh,
      'data-id': taskId,
    }),
    Element(
      'div',
      { class: styles.projectEditActionButtons },
      Element('button', { class: styles.confirmTaskButton }),
      Element('button', { class: styles.deleteTaskButton })
    )
  );

  taskInfo.insertAdjacentElement('afterend', taskEdit);

  taskInfo.classList.add('hidden');
}
