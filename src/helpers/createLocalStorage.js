export default function createLocalStorage() {
  if (!localStorage.getItem('toDoList')) {
    localStorage.setItem(
      'toDoList',
      JSON.stringify([
        {
          name: 'Default Project',
          tasks: [
            {
              title: 'Default Task Title',
              dueDate: '',
              priority: 'low',
              complete: false,
              id: 420,
            },
          ],
          id: 69,
        },
      ])
    );
  }
}
