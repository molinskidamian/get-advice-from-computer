const form = document.querySelector('.myForm');
const input = form.querySelector('input[name="advice"]');
const btnAdd = form.querySelector('button[name="add"]');
const btnReset = form.querySelector('button[name="reset"]');
// diffrent method for training
const actions = document.querySelector('.actions');
const actionButtons = actions.querySelectorAll('button');
const paragraph = document.querySelector(['.computer-answers > p']);
const answers = [];

// add Answer
const addAnswer = (e) => {
  e.preventDefault();
  if (input.value === '') {
    console.log('pusto tu..');
  } else {
    answers.push(input.value);
    console.log(`Added: ${input.value}`);
    input.value = '';
  }
};
btnAdd.addEventListener('click', addAnswer);

//  Reset List
const resetList = (e) => {
  e.preventDefault();
  if (answers.length === 0) {
    console.log('Lista jest pusta');
  } else {
    answers.length = 0;
    console.log(`Cleaning list - currently: ${answers.length} elements`);
    console.log(answers);
    paragraph.textContent = '';
  }
};
btnReset.addEventListener('click', resetList);

// List adviced
const showListAdvices = (e) => {
  e.preventDefault();
  console.log(answers);
  const ol = document.createElement('ol');
  const df = document.createDocumentFragment();
  answers.forEach((el) => {
    const li = document.createElement('li');
    const text = document.createTextNode(el);
    li.appendChild(text);
    ol.appendChild(li);
  });
  ol.style.margin = '15px';
  df.appendChild(ol);
  paragraph.appendChild(df);
};
actionButtons[1].addEventListener('click', showListAdvices);

function randomAnswer() {
  return Math.floor(Math.random() * answers.length) - 1;
}

//  show Me Advice
const showMeAdvice = () => {
  paragraph.textContent = '';
  if (answers.length === 0) {
    console.log('Nie wprowadziłeś żadnych możliwych odpowiedzi');
  } else if (answers.length === 1) {
    console.log('serio...');
  } else {
    // console.log(answers[randomAnswer()]);
    const text = document.createTextNode(answers[randomAnswer()]);
    paragraph.appendChild(text);
  }
};
actionButtons[0].addEventListener('click', showMeAdvice);
