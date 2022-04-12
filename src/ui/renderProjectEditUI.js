import Element from '../factories/Element';
import styles from './tailwind';

export default function renderProjectEditUI(projectId) {
  const sideNavProject = document.querySelector(
    `.side-nav-project[data-id='${projectId}']`
  );
  const sideNavProjectName = document.querySelector(
    `.side-nav-project-name[data-id='${projectId}']`
  );
  // const mainViewProject = document.querySelector(
  //   `.project-container[data-id='${projectId}']`
  // );

  const projectEdit = Element(
    'div',
    { class: styles.projectEditPanel },
    Element('input', {
      class: styles.editName,
      type: 'text',
      value: sideNavProjectName.textContent,
    }),
    Element(
      'div',
      { class: styles.projectEditActionButtons },
      Element('button', { class: styles.confirmProjectButton }),
      Element('button', { class: styles.deleteProjectButton })
    )
  );

  sideNavProject.insertAdjacentElement('afterend', projectEdit);
  sideNavProject.classList.add('hidden');
}
