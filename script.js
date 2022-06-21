//Targeting html div container and button

const container = document.querySelector('.container');
const button = document.getElementById('#grid');

//Function for creating a grid of divs

function createGrid(rows, columns){

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    
    for(i = 0; i < (rows * columns); i++) {
        let div = document.createElement('div');
        div.style.width = '20px';
        div.style.height = '20px';
        div.style.background = 'black';
        div.style.border = '1px solid #ddd';

        function random(number) {
            return Math.floor(Math.random() * (number+1));
        };
          
        div.addEventListener('mouseover', () => {
            const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            div.style.backgroundColor = rndCol;
        });

        container.appendChild(div);
    };
};

createGrid(16, 16);

function buttonClick() {
    
    let question = prompt('How many squares would you like per side of your grid? (Max of 100)');

    if(question > 100) {
        alert('Error: You can\'t choose more than 100!')
    } else if(question <= 100) {
        createGrid(question, question);
    } else {
        createGrid(16, 16);
    }
};



