// Throw out rubbish
// Gym
// Feed a cat

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement =
  document.querySelector('.categories');

let selectedCategory: Category;

// const task = {
//     name: 'Throw out rubbish',
//     done: false
// }

type Category = 'general' | 'work' | 'gym' | 'hobby';

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

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

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement('li');

    const radioInputElement: HTMLInputElement = document.createElement('input');
    radioInputElement.type = 'radio';
    radioInputElement.name = 'category';
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener('change', () => {
      selectedCategory = category;
    });

    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.setAttribute('for', `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener('click', (event: Event) => {
  // const selectedRadioElement: HTMLInputElement = document.querySelector(
  //   'input[type="radio"]:checked'
  // );

  event.preventDefault();
  console.log(taskNameInputElement.value);
  addTask({
    name: String(taskNameInputElement.value),
    done: false,
    category: selectedCategory,
  });
  render();
});

renderCategories();
render();
