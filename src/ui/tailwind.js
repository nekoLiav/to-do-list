export default {
  /* main display projects */
  projectContainer: 'project-container flex flex-col w-full gap-1',
  projectInfo: 'flex',
  projectName: 'project-name w-full p-1 ml-5 font-bold text-white rounded',
  projectTasks: 'project-tasks flex flex-col w-full gap-1',
  taskAddButton:
    'w-8 h-6 p-1 task-add-button rounded hover:bg-slate-100 active:bg-slate-300 fa-solid fa-plus bg-slate-200',
  /* main display tasks */
  taskInfo:
    'flex items-center gap-5 p-1 rounded cursor-pointer hover:bg-slate-100 active:bg-slate-300 bg-slate-200 task-info',
  taskCompleteButton:
    '!hidden w-8 h-6 rounded text-slate-400 task-complete-button bg-slate-700 fa-solid fa-circle-check',
  taskTitle: 'mr-auto text-sm task-title',
  taskDueDate:
    'task-due-date flex items-center h-full text-xs task-due-date place-self-center',
  taskPriority: 'mr-1 text-sm task-priority place-self-center fa-solid fa-flag',
  taskEditButton:
    '!hidden w-8 h-6 p-1 text-sm text-white rounded active:bg-slate-800 hover:bg-slate-600 task-edit-button fa-solid bg-slate-700 fa-pen-to-square',
  /* side display projects */
  sideProjectContainer:
    'flex items-center justify-between w-full p-1 rounded cursor-pointer hover:bg-slate-100 active:bg-slate-300 bg-slate-200 side-project-container',
  sideProjectName: 'side-project-name',
  sideProjectEditButton:
    '!hidden w-8 h-6 p-1 text-white rounded hover:bg-slate-600 active:bg-slate-800 bg-slate-700 fa-pen-to-square fa-solid side-project-edit-button',
  /* edit task */
  editTaskPanel:
    'task-edit-panel flex items-center justify-between p-1 text-sm rounded bg-slate-200',
  editTitle: 'edit-title w-40 text-sm rounded max-h-5',
  editDueDate: 'edit-due-date w-40 text-xs rounded max-h-5',
  priorityLow:
    '!hidden w-8 h-6 p-1 text-green-500 rounded priority-selector hover:bg-slate-600 active:bg-slate-800 fa-solid fa-flag bg-slate-700',
  priorityMed:
    '!hidden w-8 h-6 p-1 text-yellow-500 rounded priority-selector hover:bg-slate-600 active:bg-slate-800 fa-solid fa-flag bg-slate-700',
  priorityHigh:
    '!hidden w-8 h-6 p-1 text-red-500 rounded priority-selector hover:bg-slate-600 active:bg-slate-800 fa-solid fa-flag bg-slate-700',
  taskEditActionButtons: 'flex gap-0.5',
  confirmTaskButton:
    'confirm-task-button w-8 h-6 p-1 text-green-500 rounded active:bg-slate-800 hover:bg-slate-600 bg-slate-700 fa-solid fa-circle-check',
  deleteTaskButton:
    'delete-task-button w-8 h-6 p-1 text-red-500 rounded active:bg-slate-800 hover:bg-slate-600 bg-slate-700 fa-solid fa-trash-can',
  /* edit project */
  projectEditPanel:
    'project-edit-panel flex items-center w-full gap-1 p-1 rounded bg-slate-200',
  editName: 'edit-name text-sm rounded max-h-5',
  projectEditActionButtons: 'flex w-full gap-1',
  confirmProjectButton:
    'confirm-project-button w-8 h-6 p-1 ml-auto text-green-500 rounded active:bg-slate-800 hover:bg-slate-600 fa-circle-check fa-solid bg-slate-700',
  deleteProjectButton:
    'delete-project-button w-8 h-6 p-1 text-red-500 rounded active:bg-slate-800 hover:bg-slate-600 bg-slate-700 fa-trash-can fa-solid',
};
