//Targeting html div container and button

const container = document.querySelector('.container');
const button = document.getElementById('#grid');

//Function for creating a grid of divs

function createGrid(rows, columns){

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    
    for(i = 0; i < (rows * columns); i++) {
        let div = document.createElement('div');

        function random(number) {
            return Math.floor(Math.random() * (number+1));
        };
          
        div.addEventListener('mouseover', () => {
            const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            div.style.backgroundColor = rndCol;
        });

        container.appendChild(div).className = 'grid-item';
    };
};

createGrid(16, 16);

//Resets the divs in order to clear past grids

function reset() {
    document
      .querySelectorAll(".grid-item")
      .forEach((e) => e.parentNode.removeChild(e));
  }

//On click event generates a new grid based on the number entered

function buttonClick() {
    let question = prompt('How many squares would you like per side of your grid? (Max of 100)');
    if(question < 0 || question > 100 || question === null || question === '' || question == String) {
        alert('Error: Please enter a number between 1 and 100');
    };
    if(question <= 100) {
        reset();
        createGrid(question, question);
    };
};
