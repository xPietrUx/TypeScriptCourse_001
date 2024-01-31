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

const tasks: {
  name: string;
  done: boolean;
}[] = [
  {
    name: 'Throw out rubbish',
    done: false,
  },
  {
    name: 'Gym',
    done: true,
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
    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.innerText = task.name;
    labelElement.setAttribute('for', id);

    const checkboxElement: HTMLInputElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false });
};

addButtonElement.addEventListener('click', (event: Event) => {
  event.preventDefault();
  console.log(taskNameInputElement.value);
  addTask(String(taskNameInputElement.value));
  render();
});

render();
