/*functions:
start - starts interval
askquestion - picks colour

*/

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

const boxesArray = [boxOne, boxTwo, boxThree, boxFour];
let boxesArrayCopy;

const startGame = () => {
  colourArrayCopy = [...colourArray];
  boxesArrayCopy = [...boxesArray];
  //start a timer
  startTimeout();
  //get a random number for colour (max 7)
  let randomNumC = randomNumber(7);
  //update the text in question to the colourArrayCopy[randomNum]
  question.innerHTML = colourArrayCopy[randomNumC];
  //choose a random number to pick correct answer box (max 4)
  let randomNumB = randomNumber(4);
  //set background of that box to colourArrayCopy[randomNum]
  boxesArrayCopy[randomNumB].style.background = colourArrayCopy[randomNumC];
  //remove that box from box array copy
  boxesArrayCopy = boxesArrayCopy.filter(box => box !== boxesArrayCopy[randomNumB]);
  //remove that colour from the colour copy array
  colourArrayCopy = colourArrayCopy.filter(colour => colour !== colourArrayCopy[randomNumC]);

  //loop through boxescopy
  boxesArrayCopy.forEach(box => {
    randomNumC = randomNumber(colourArrayCopy.length);
    randomNumB = randomNumber(boxesArrayCopy.length);
    boxesArrayCopy[randomNumB].style.background = colourArrayCopy[randomNumC];
    boxesArrayCopy = boxesArrayCopy.filter(box => box !== boxesArrayCopy[randomNumB]);
    colourArrayCopy = colourArrayCopy.filter(colour => colour !== colourArrayCopy[randomNumC]);
  })
    //random number (max colourcopyarray length)
    //random number (max boxescopy length)
    //set background of chosen box to chosen colour
    //remove colour and box from array
//condense this - duplicate instructions should be broken out into functions
}

const startTimeout = () => {
  waitForUser = setTimeout(()=> alert("hi"), 3000);
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

boxOne.addEventListener('click', (e) => {
  stopTimeout();
})

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
