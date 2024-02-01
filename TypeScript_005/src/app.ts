// Throw out rubbish
// Gym
// Feed a cat

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

// const task = {
//     name: 'Throw out rubbish',
//     done: false
// }

interface Task {
  name: string;
  done: boolean;
  category?: 'general' | 'work' | 'gym' | 'hobby';
}

const categories: string[] = ['general', 'work', 'gym', 'hobby'];

const tasks: Task[] = [
  {
    name: 'Throw out rubbish',
    done: false,
  },
  {
    name: 'Gym',
    done: true,
    category: 'gym',
  },
  {
    name: 'Feed a cat',
    done: false,
  },
];

const render = () => {
  /* <li>
        <label for="task-1">Throw out rubbish</label>
        <input type="checkbox" id="task-1" name="Throw out rubbish" />
        </li> */

  tasksContainerElement.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement('li');
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.innerText = task.name;
    labelElement.setAttribute('for', id);

    const checkboxElement: HTMLInputElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener('change', () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener('click', (event: Event) => {
  event.preventDefault();
  console.log(taskNameInputElement.value);
  addTask({ name: String(taskNameInputElement.value), done: false });
  render();
});

render();
