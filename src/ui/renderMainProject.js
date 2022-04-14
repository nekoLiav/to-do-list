import Element from '../factories/Element';
import updateProject from '../helpers/updateProject';
import styles from './tailwind';

export default function renderMainProject(project) {
  const mainProject = Element(
    'div',
    {
      class: styles.projectContainer,
      'data-project-id': project.id,
    },
    Element(
      'div',
      { class: styles.projectInfo, 'data-project-id': project.id },
      Element(
        'p',
        {
          class: styles.projectName,
          'data-project-id': project.id,
        },
        project.name
      )
    ),
    Element('ul', {
      class: styles.projectTasks,
      'data-project-id': project.id,
    }),
    Element('button', {
      class: styles.taskAddButton,
      'data-project-id': project.id,
    })
  );

  const main = document.getElementById('main');

  main.append(mainProject);

  updateProject();
}
