import Element from '../factories/Element';
import styles from './tailwind';

export default function renderSideNavProjects(project) {
  const sideProject = Element(
    'div',
    { class: styles.sideProjectContainer, 'data-id': project.id },
    Element(
      'p',
      { class: styles.sideProjectName, 'data-id': project.id },
      project.name
    ),
    Element('button', {
      class: styles.sideProjectEditButton,
      'data-id': project.id,
    })
  );

  const sideProjects = document.getElementById('side-projects');

  sideProjects.append(sideProject);
}
