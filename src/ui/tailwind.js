/* eslint-disable import/prefer-default-export */
export const tailwind = {
  /* main display projects */
  projectContainer: 'flex flex-col w-full gap-1',
  projectInfo: 'flex',
  projectName: 'w-full p-1 ml-5 font-bold text-white rounded',
  projectTasks: 'project-tasks flex flex-col w-full gap-1',

  /* main display tasks */
  taskInfo:
    'flex items-center gap-5 p-1 rounded cursor-pointer hover:bg-slate-100 active:bg-slate-300 bg-slate-200 task',
  taskCompleteButton:
    '!hidden w-8 h-6 rounded text-slate-400 task-complete-button bg-slate-700 fa-solid fa-circle-check',
  taskTitle: 'mr-auto text-sm task-title',
  taskDueDate:
    'task-due-date flex items-center h-full text-xs task-due-date place-self-center',
  taskPriority: 'mr-1 text-sm task-priority place-self-center fa-solid fa-flag',
  taskEditButton:
    '!hidden w-8 h-6 p-1 text-sm text-white rounded active:bg-slate-800 hover:bg-slate-600 task-edit-button fa-solid bg-slate-700 fa-pen-to-square',

  taskAddButton:
    'w-8 h-6 p-1 rounded hover:bg-slate-100 active:bg-slate-300 fa-solid fa-plus bg-slate-200',
};
