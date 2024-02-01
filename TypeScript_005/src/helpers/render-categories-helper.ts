import { Category } from '../types/types';

const handleCategoryChange = (category: Category) => {
  if (category === 'general') {
    console.log('Switch to general');
  } else if (category === 'gym') {
    alert('Gym time!');
  } else if (category === 'hobby') {
    document.body.style.background = 'red';
  } else if (category === 'work') {
    alert('Work time!');
  } else if (category === 'social') {
    document.body.style.background = 'yellow';
  } else {
    const never: never = category;
    console.log(never);
  }
};

export const renderCategories = (
  categories: Category[],
  categoriesContainerElement: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement('li');

    const radioInputElement: HTMLInputElement = document.createElement('input');
    radioInputElement.type = 'radio';
    radioInputElement.name = 'category';
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener('change', () => {
      inputChangeCallback(category);
      handleCategoryChange(category);
    });

    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.setAttribute('for', `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};
