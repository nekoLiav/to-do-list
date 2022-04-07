export default function createLocalStorage() {
  if (!localStorage.getItem('toDoList')) {
    localStorage.setItem(
      'toDoList',
      JSON.stringify([
        {
          name: 'Default Project',
          tasks: [
            {
              title: 'Default Title',
              dueDate: '',
              priority: 'Low',
              checked: false,
              id: 420,
            },
          ],
          id: 69,
        },
      ])
    );
  }
}
