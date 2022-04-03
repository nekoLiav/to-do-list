import toDoList from './toDoList';

export default function toggleChecked(name) {
  toDoList.forEach((element) => {
    if (element.name === name) {
      const project = element;
      if (element.tasks[0].checked === false) {
        project.tasks[0].checked = true;
      } else {
        project.tasks[0].checked = false;
      }
    }
  });
}
