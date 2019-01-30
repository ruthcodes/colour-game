const colourArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
let colourArrayCopy;
//timeout array to enable clear all
let timeouts = [];
let waitForUser;
let game = false;

const boxOne = document.querySelector('#colourOne');
const boxTwo = document.querySelector('#colourTwo');
const boxThree = document.querySelector('#colourThree');
const boxFour = document.querySelector('#colourFour');
const question = document.querySelector('#question');
const answers = [...document.querySelectorAll('.answer')];
const count = document.querySelector('#score');

const boxesArray = [boxOne, boxTwo, boxThree, boxFour];
let boxesArrayCopy;


const startGame = () => {
  game = true;
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
  addColourWords();

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

const addColourWords = () => {
  boxesArray.forEach(box => {
    box.firstChild.innerHTML = colourArray[randomNumber(7)];
    box.firstChild.style.color = colourArray[randomNumber(7)];
  })
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
  let check;
  //if click on word, check background of parent box
  if (e.target.className === "colourText"){
    check = e.target.parentElement.style.background;
  } else {
    check = e.target.style.background;
  }

  if (check === question.innerHTML){
    incrementCounter();
    startGame();
  } else {
    wrongAnswer();
  }
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
  boxesArray.forEach(box => {
    box.firstChild.innerHTML = ""
  })
  count.innerHTML = "0";
  game = false;
}

const incrementCounter = () => {
  let current = +count.innerHTML;
  count.innerHTML = ++current;
}

answers.forEach(answer => answer.addEventListener('click', checkAnswer))

question.addEventListener('click', (e)=> {
  if (!game){
      startGame();
  }
})




//game modes:
// -easy: slow pace, doesn't speed up
// -medium: medium pace, doesn't speed up
// -hard: medium pace, speeds up every other correct answer
