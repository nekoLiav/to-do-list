import Element from '../factories/Element';
import styles from './tailwind';

export default function renderProjectEditUI(projectId) {
  const sideProjectContainer = document.querySelector(
    `.side-project-container[data-id='${projectId}']`
  );
  const sideProjectName = document.querySelector(
    `.side-project-name[data-id='${projectId}']`
  );

  const projectEdit = Element(
    'div',
    { class: styles.projectEditPanel, 'data-id': projectId },
    Element('input', {
      class: styles.editName,
      'data-id': projectId,
      type: 'text',
      value: sideProjectName.textContent,
    }),
    Element(
      'div',
      { class: styles.projectEditActionButtons },
      Element('button', {
        class: styles.confirmProjectButton,
        'data-id': projectId,
      }),
      Element('button', {
        class: styles.deleteProjectButton,
        'data-id': projectId,
      })
    )
  );

  sideProjectContainer.insertAdjacentElement('afterend', projectEdit);
  sideProjectContainer.classList.add('hidden');
}
