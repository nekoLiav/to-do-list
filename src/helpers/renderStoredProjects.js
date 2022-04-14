import { toDoList } from '../core/globals';
import renderSideProjects from '../ui/renderSideProjects';

export default function renderStoredProjects() {
  toDoList.forEach((project) => {
    renderSideProjects(project);
  });
}
