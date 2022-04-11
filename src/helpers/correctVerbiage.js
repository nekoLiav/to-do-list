export default function correctVerbiage(taskCounter, projectCounter) {
  let taskWord;
  let projectWord;
  if (taskCounter === 1) {
    taskWord = 'task';
  } else {
    taskWord = 'tasks';
  }
  if (projectCounter === 1) {
    projectWord = 'project';
  } else {
    projectWord = 'projects';
  }
  return { taskWord, projectWord };
}
