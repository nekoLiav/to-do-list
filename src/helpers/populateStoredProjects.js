import { toDoList } from '../core/globals';
import renderSideProject from '../ui/renderSideProject';

export default function populateStoredProjects() {
  toDoList.forEach((project) => {
    renderSideProject(project);
  });
}
