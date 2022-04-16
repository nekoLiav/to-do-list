export default {
  /* main display projects */
  projectContainer:
    'project-container p-1 flex flex-col bg-slate-700 rounded w-full gap-1',
  projectInfo: 'flex',
  projectName: 'project-name w-full p-1 ml-5 font-bold text-white rounded',
  projectTasks: 'project-tasks flex flex-col w-full gap-1',
  taskAddButton:
    'w-8 h-6 p-1 task-add-button flex justify-center items-center rounded hover:bg-slate-100 active:bg-slate-300 bg-slate-200',
  /* main display tasks */
  taskContainer:
    'flex items-center gap-5 p-1 sm:min-w-[364px] sm:max-w-[512px] w-full rounded cursor-pointer hover:bg-slate-100 active:bg-slate-300 bg-slate-200 task-container',
  taskCompleteButton:
    '!hidden flex justify-center items-center w-8 h-6 rounded text-slate-400 task-complete-button bg-slate-800 hover:bg-slate-700 active:bg-slate-600',
  taskTitle: 'mr-auto text-sm task-title',
  taskDueDate:
    'task-due-date flex items-center h-full text-xs task-due-date place-self-center',
  taskPriority: 'mr-1 text-sm task-priority place-self-center ',
  taskEditButton:
    '!hidden flex justify-center items-center w-8 h-6 p-1 text-sm text-white rounded active:bg-slate-600 hover:bg-slate-700 task-edit-button bg-slate-800',
  /* side display projects */
  sideProjectContainer:
    'flex items-center justify-between w-full p-1 rounded cursor-pointer hover:bg-slate-100 active:bg-slate-300 bg-slate-200 side-project-container',
  sideProjectName: 'side-project-name text-black text-sm',
  sideProjectEditButton:
    '!hidden flex justify-center items-center w-8 h-6 p-1 text-white rounded hover:bg-slate-700 active:bg-slate-600 bg-slate-800 side-project-edit-button',
  /* edit task */
  editTaskPanel:
    'task-edit-panel flex items-center justify-between p-1 text-sm rounded bg-slate-200',
  editTitle: 'edit-title max-w-[200px] text-sm rounded max-h-5',
  editDueDate: 'edit-due-date bg-slate-200 w-6 text-xs rounded',
  priorityLow:
    '!hidden flex justify-center items-center w-8 h-6 p-1 text-green-500 rounded priority-selector high',
  priorityMed:
    '!hidden flex justify-center items-center w-8 h-6 p-1 text-yellow-500 rounded priority-selector medium',
  priorityHigh:
    '!hidden flex justify-center items-center w-8 h-6 p-1 text-red-500 rounded priority-selector low',
  taskEditActionButtons: 'flex gap-0.5',
  confirmTaskButton:
    'confirm-task-button flex justify-center items-center w-8 h-6 p-1 text-green-500 rounded active:bg-slate-600 hover:bg-slate-700 bg-slate-800',
  deleteTaskButton:
    'delete-task-button flex justify-center items-center w-8 h-6 p-1 text-red-500 rounded active:bg-slate-600 hover:bg-slate-700 bg-slate-800',
  /* edit project */
  projectEditPanel:
    'project-edit-panel flex items-center w-full gap-1 p-1 rounded bg-slate-200',
  editName:
    'edit-name text-black max-w-[200px] sm:max-w-[170px] text-sm rounded max-h-5',
  projectEditActionButtons: 'flex w-full gap-1',
  confirmProjectButton:
    'confirm-project-button flex justify-center items-center w-8 h-6 p-1 ml-auto text-green-500 rounded active:bg-slate-600 hover:bg-slate-700 bg-slate-800',
  deleteProjectButton:
    'delete-project-button flex justify-center items-center w-8 h-6 p-1 text-red-500 rounded active:bg-slate-600 hover:bg-slate-700 bg-slate-800',
};
