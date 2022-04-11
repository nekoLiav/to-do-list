export default class Task {
  constructor(title, dueDate, priority, complete) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.id = Date.now();
  }
}
