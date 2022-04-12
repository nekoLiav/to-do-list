import Element from '../factories/Element';
import { tailwind } from './tailwind';

export default function renderMainProjects(project) {
  const mainProjects = Element(
    'div',
    {
      class: tailwind.projectContainer,
      'data-id': project.id,
    },
    Element(
      'div',
      { class: tailwind.projectInfo, 'data-id': project.id },
      Element(
        'p',
        {
          class: tailwind.projectName,
          'data-id': project.id,
        },
        project.name
      )
    ),
    Element('ul', {
      class: tailwind.projectTasks,
      'data-id': project.id,
    }),
    Element('button', {
      id: 'task-add-button',
      class: tailwind.taskAddButton,
      'data-id': project.id,
    })
  );

  const taskContainer = document.getElementById('task-container');

  taskContainer.append(mainProjects);
}
