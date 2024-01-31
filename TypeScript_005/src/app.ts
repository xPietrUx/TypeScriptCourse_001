/* <li>
<label for="task-1">Throw out rubbish</label>
<input type="checkbox" id="task-1" name="Throw out rubbish" />
</li> */

// Throw out rubbish
// Gym
// Feed a cat

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');

const addButtonElement: HTMLButtonElement = document.querySelector('button');

const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

const tasks: string[] = ['Throw out rubbish', 'Gym', 'Feed a cat'];

const render = () => {
  tasksContainerElement.innerHTML = '';
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement('li');
    taskElement.innerText = task;
    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addButtonElement.addEventListener('click', (event: Event) => {
  event.preventDefault();
  console.log(taskNameInputElement.value);
  addTask(String(taskNameInputElement.value));
  render();
});

render();
