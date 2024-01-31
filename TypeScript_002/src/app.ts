const input1: HTMLInputElement | null = document.querySelector('#input1');

const input2: HTMLInputElement | null = document.querySelector('#input2');
const button = document.querySelector('#button');

const Add = (v1: number, v2: number) => {
  return v1 + v2;
};

button.addEventListener('click', () => {
  const a1: number = Number(input1.value);
  const a2: number = Number(input2.value);

  console.log(a1);
  console.log(a2);

  const sum = Add(a1, a2);
  console.log(sum);
});
