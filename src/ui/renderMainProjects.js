import Element from '../factories/Element';
import styles from './tailwind';

export default function renderMainProjects(project) {
  const mainProject = Element(
    'div',
    {
      class: styles.projectContainer,
      'data-id': project.id,
    },
    Element(
      'div',
      { class: styles.projectInfo, 'data-id': project.id },
      Element(
        'p',
        {
          class: styles.projectName,
          'data-id': project.id,
        },
        project.name
      )
    ),
    Element('ul', {
      class: styles.projectTasks,
      'data-id': project.id,
    }),
    Element('button', {
      id: 'task-add-button',
      class: styles.taskAddButton,
      'data-id': project.id,
    })
  );

  const taskContainer = document.getElementById('task-container');

  taskContainer.append(mainProject);
}
