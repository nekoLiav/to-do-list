import { toDoList } from './globals';

export default function mostRecentProject() {
  return toDoList[toDoList.length - 1];
}
