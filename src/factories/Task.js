export default class Task {
  constructor(title, dueDate, priority, checked) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
    this.id = Date.now();
  }
}
