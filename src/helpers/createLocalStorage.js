export default function createLocalStorage() {
  if (!localStorage.getItem('toDoList')) {
    localStorage.setItem(
      'toDoList',
      JSON.stringify({
        name: 'Default Project',
        tasks: [
          {
            title: 'Default Task Title',
            dueDate: 'Default Task Due Date',
            priority: 'Default Task Priority',
            checked: false,
            id: 420,
          },
        ],
        id: 69,
      })
    );
  }
}
