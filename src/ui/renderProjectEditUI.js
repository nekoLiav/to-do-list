import Element from '../factories/Element';
import styles from './tailwind';

export default function renderProjectEditUI(projectId) {
  const sideProjectContainer = document.querySelector(
    `.side-project-container[data-project-id='${projectId}']`
  );
  const sideProjectName = document.querySelector(
    `.side-project-name[data-project-id='${projectId}']`
  );

  const projectEdit = Element(
    'div',
    { class: styles.projectEditPanel, 'data-project-id': projectId },
    Element('input', {
      class: styles.editName,
      'data-project-id': projectId,
      type: 'text',
      value: sideProjectName.textContent,
    }),
    Element(
      'div',
      { class: styles.projectEditActionButtons },
      Element('button', {
        class: styles.confirmProjectButton,
        'data-project-id': projectId,
      }),
      Element('button', {
        class: styles.deleteProjectButton,
        'data-project-id': projectId,
      })
    )
  );

  sideProjectContainer.insertAdjacentElement('afterend', projectEdit);
  sideProjectContainer.classList.add('hidden');

  document.querySelector(`.edit-name[data-project-id='${projectId}']`).focus();
}
