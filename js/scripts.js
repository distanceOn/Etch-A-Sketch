let createItem = (quantity) => {
    const div = document.createElement('div');
    div.classList.add('blocks__item');
    blocks.append(div);
}

let createGrid = (quantity) => {

    blocks.style.gridTemplateColumns = `repeat(${quantity}, 1fr)`;

    for(let i = 0; i < (quantity*quantity); i++) {
        createItem();
    }
};

createGrid(100);