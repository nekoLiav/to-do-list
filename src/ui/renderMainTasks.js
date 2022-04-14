import Element from '../factories/Element';
import styles from './tailwind';
import formatDates from '../helpers/formatDates';
import checkComplete from '../helpers/checkComplete';
import priorityColor from '../helpers/priorityColor';
import hideUnusedDates from '../helpers/hideUnusedDates';
import checkEmptyTaskList from '../helpers/checkEmptyTaskList';

export default function renderMainTasks(project, task) {
  const mainTask = Element(
    'div',
    {
      class: styles.taskContainer,
      'data-task-id': task.id,
      'data-project-id': project.id,
    },
    Element('button', {
      class: styles.taskCompleteButton,
      'data-task-id': task.id,
      'data-project-id': project.id,
      'data-complete': task.complete,
    }),
    Element(
      'p',
      {
        class: styles.taskTitle,
        'data-task-id': task.id,
        'data-project-id': project.id,
      },
      task.title
    ),
    Element(
      'p',
      {
        class: styles.taskDueDate,
        'data-task-id': task.id,
        'data-project-id': project.id,
        'data-date': task.dueDate,
      },
      formatDates(task.dueDate, 'relative')
    ),
    Element('p', {
      class: styles.taskPriority,
      'data-task-id': task.id,
      'data-project-id': project.id,
      'data-priority': task.priority,
    }),
    Element('button', {
      class: styles.taskEditButton,
      'data-task-id': task.id,
      'data-project-id': project.id,
    })
  );

  const projectTasksList = document.querySelector(
    `.project-tasks[data-project-id='${project.id}']`
  );

  projectTasksList.append(mainTask);

  checkComplete();
  priorityColor(project.id, task.id);
  hideUnusedDates();
  checkEmptyTaskList();
}
