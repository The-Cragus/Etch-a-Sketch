//Targeting html div container and button

const container = document.querySelector('.container');

const button = document.getElementById('#grid');


function createGrid(rows, columns){

    for(i = 0; i < (rows * columns); i++) {
        let div = document.createElement('div');
        div.style.width = '30px';
        div.style.height = '30px';
        div.style.background = 'black';
        div.style.border = '1px solid #ddd';
        container.appendChild(div);
    };
};

createGrid(16, 16);