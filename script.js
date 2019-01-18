/*functions:
start - starts interval
askquestion - picks colour

*/

const colourArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
let timeouts = [];
//store timeout
let waitForUser;

const boxOne = document.querySelector('#colourOne');
const boxTwo = document.querySelector('#colourTwo');
const boxThree = document.querySelector('#colourThree');
const boxFour = document.querySelector('#colourFour');
const question = document.querySelector('#question');

const startGame = () => {

}

const startTimeout = () => {
  waitForUser = setTimeout(()=> alert("hi"), 3000);
  timeouts.push(waitForUser);
}

const stopTimeout = () => {
  timeouts.forEach(timeout => clearTimeout(timeout))
}

const randomColour = () => {

}

boxOne.addEventListener('click', (e) => {
  stopTimeout();
})

question.addEventListener('click', (e)=> {
  startTimeout();
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
