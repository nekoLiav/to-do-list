export default class Task {
  constructor(title, description, dueDate, priority, checked) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
  }
}
