import Element from '../factories/Element';
import styles from './tailwind';

export default function renderSideProject(project) {
  const sideProject = Element(
    'div',
    { class: styles.sideProjectContainer, 'data-project-id': project.id },
    Element(
      'p',
      { class: styles.sideProjectName, 'data-project-id': project.id },
      project.name
    ),
    Element('button', {
      class: styles.sideProjectEditButton,
      'data-project-id': project.id,
    })
  );

  const sideProjectAnchor = document.getElementById('side-project-anchor');

  sideProjectAnchor.append(sideProject);
}
