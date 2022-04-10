import { toDoList } from '../core/globals';
import renderSideNavProjects from '../ui/renderSideNavProjects';

export default function renderStoredProjects() {
  toDoList.forEach((project) => {
    renderSideNavProjects(project);
  });
}
