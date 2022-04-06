import { toDoList } from '../core/globals';

export default function mostRecentProject() {
  return toDoList[toDoList.length - 1];
}
