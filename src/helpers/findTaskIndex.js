export default function findTaskIndex(project, taskId) {
  return project.tasks.map((task) => task.id).indexOf(taskId);
}
