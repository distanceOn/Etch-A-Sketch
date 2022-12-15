let createItem = (quantity) => {
    const div = document.createElement('div');
    div.classList.add('blocks__item');
    blocks.append(div);
    
    div.addEventListener('mouseover', (event) => {
        const target = event.target;

        target.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    });
};

let createGrid = (quantity) => {

    blocks.style.gridTemplateColumns = `repeat(${quantity}, 1fr)`;

    for(let i = 0; i < (quantity*quantity); i++) {
        createItem();
    }
};

createGrid(16);