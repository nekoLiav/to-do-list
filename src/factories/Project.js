export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.id = Date.now();
  }
}
