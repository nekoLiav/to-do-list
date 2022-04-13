import Element from '../factories/Element';
import styles from './tailwind';
import formatDates from '../helpers/formatDates';
import checkComplete from '../helpers/checkComplete';
import priorityColor from '../helpers/priorityColor';
import hideUnusedDates from '../helpers/hideUnusedDates';

export default function renderMainTasks(project, task) {
  const mainTask = Element(
    'div',
    {
      class: styles.taskInfo,
      'data-id': task.id,
    },
    Element('button', {
      class: styles.taskCompleteButton,
      'data-id': task.id,
      'data-complete': task.complete,
    }),
    Element(
      'p',
      {
        class: styles.taskTitle,
        'data-id': task.id,
      },
      task.title
    ),
    Element(
      'p',
      {
        class: styles.taskDueDate,
        'data-id': task.id,
        'data-date': task.dueDate,
      },
      formatDates(task.dueDate, 'relative')
    ),
    Element('p', {
      class: styles.taskPriority,
      'data-id': task.id,
      'data-priority': task.priority,
    }),
    Element('button', { class: styles.taskEditButton, 'data-id': task.id })
  );

  const projectTasksList = document.querySelector(
    `.project-tasks[data-id='${project.id}']`
  );

  projectTasksList.append(mainTask);

  checkComplete();
  priorityColor();
  hideUnusedDates();
}
