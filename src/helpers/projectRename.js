import toDoList from './toDoList';

export default function projectRename(index, newName) {
  toDoList[index].name = newName;
}
