// Throw out rubbish
// Gym
// Feed a cat

import { renderCategories } from './helpers/render-categories-helper.js';
import { render } from './helpers/render-tasks-helper.js';
import { Category, Task } from './types/types';

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

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
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
  render(tasks, tasksContainerElement);
});

renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);
render(tasks, tasksContainerElement);
