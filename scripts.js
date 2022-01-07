let arrayOfId = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
let numberAdded = [];
suffle = () => {
  //get the array of random numbers
  let randomNumberArray = generateUniqueRandomeNumner(1, 9);
  // loop in
  for (let i = 0; i < 9; i++) {
    let element = document.getElementById(arrayOfId[i]);
    element.innerHTML = randomNumberArray[i];
  }
  // reset the array to generate random number again
  numberAdded.length = 0;
};

sortFunction = () => {
  for (let i = 1; i < 10; i++) {
    let element = document.getElementById(arrayOfId[i - 1]);
    element.innerHTML = i;
  }
};

generateUniqueRandomeNumner = (min, max) => {
  let random;
  while (numberAdded.length !== 9) {
    random = Math.floor(Math.random() * (max - min + 1)) + 1;
    if (numberAdded.indexOf(random) === -1) {
      numberAdded.push(random);
    }
  }
  return numberAdded;
};
