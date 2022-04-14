import Element from '../factories/Element';
import styles from './tailwind';

export default function renderSideProjects(project) {
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

  const sideProjectAnchor = document.getElementById('side-project-anchor');

  sideProjectAnchor.append(sideProject);
}
