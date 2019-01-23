const colourArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
let colourArrayCopy;
//timeout array to enable clear all
let timeouts = [];
let waitForUser;

const boxOne = document.querySelector('#colourOne');
const boxTwo = document.querySelector('#colourTwo');
const boxThree = document.querySelector('#colourThree');
const boxFour = document.querySelector('#colourFour');
const question = document.querySelector('#question');
const answers = [...document.querySelectorAll('.answer')];

const boxesArray = [boxOne, boxTwo, boxThree, boxFour];
let boxesArrayCopy;

const startGame = () => {
  //clear any previosuly set timeouts
  stopTimeout();
  colourArrayCopy = [...colourArray];
  boxesArrayCopy = [...boxesArray];
  //start a timer
  startTimeout();
  //for colour
  let randomNumC = randomNumber(7);
  //for box
  let randomNumB = randomNumber(4);
  //update the text
  question.innerHTML = colourArrayCopy[randomNumC];
  //update the correct answer box colour
  changeColours(randomNumB, randomNumC);

  let randomIncorrectBox = boxesArrayCopy[randomNumber(3)];
  let randomIncorrectBox2 = boxesArrayCopy[randomNumber(3)];


  //loop through rest of boxes
  boxesArrayCopy.forEach(box => {
    randomNumC = randomNumber(colourArrayCopy.length);
    randomNumB = randomNumber(boxesArrayCopy.length);
    changeColours(randomNumB, randomNumC)
  })
  question.style.background = randomIncorrectBox.style.background;
  question.style.color = randomIncorrectBox2.style.background;
}

const updateArray = (array, number) => {
  return array.filter(item => item !== array[number]);
}

const changeColours = (randBox, randColour) => {
  boxesArrayCopy[randBox].style.background = colourArrayCopy[randColour];
  boxesArrayCopy = updateArray(boxesArrayCopy, randBox);
  colourArrayCopy = updateArray(colourArrayCopy, randColour);
}

const startTimeout = () => {
  waitForUser = setTimeout(()=> {
    alert("Too slow!");
    //clear any other timers that user may have set on loss
    timeouts.forEach(timeout => clearTimeout(timeout));
    resetGame();
  }, 2000);
  timeouts.push(waitForUser);
}

const stopTimeout = () => {
  timeouts.forEach(timeout => clearTimeout(timeout))
  //reset array of colours for next round
  colourArrayCopy = [...colourArray];
  boxesArrayCopy = [...boxesArray];
}

const randomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const checkAnswer = (e) => {
  e.target.style.background === question.innerHTML ? startGame() : wrongAnswer();
}

const wrongAnswer = () => {
  stopTimeout();
  alert("Wrong answer!");
  resetGame();
}

const resetGame = () => {
  question.innerHTML = "start";
  question.style.background = "black";
  question.style.color = "white";
}

answers.forEach(answer => answer.addEventListener('click', checkAnswer))

question.addEventListener('click', (e)=> {
  startGame();
})


//array of possible colours

//each turn, randomly choose a colour from array and update question text

//choose a random colour and update question background

//update a random box to the question colour, and 3 others to other random colours from array

//increment counter on correct guess



//game modes:
// -easy: slow pace, doesn't speed up
// -medium: medium pace, doesn't speed up
// -hard: medium pace, speeds up every other correct answer
