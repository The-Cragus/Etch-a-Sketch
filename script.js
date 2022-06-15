const container = document.querySelector('.containerOne');

function createDiv(){

    var div = document.createElement('div');
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.background = 'red';
    div.style.color = 'black';
    div.style.margin = '10px';
    div.style.border = '10px';
    div.style.padding = '10px';

    container.appendChild(div);
};



for(let i = 0; i < 16; i++) {
    createDiv();
}
