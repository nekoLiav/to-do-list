import toDoList from './globals';

export default function editPriority(name, priority) {
  toDoList.forEach((element) => {
    if (element.name === name) {
      const project = element;
      project.tasks[0].priority = priority;
    }
  });
}