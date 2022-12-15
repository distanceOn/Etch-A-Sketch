let createItem = (quantity) => {
    const div = document.createElement('div');
    div.classList.add('blocks__item');
    blocks.append(div);
    const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    
    

    div.addEventListener('mouseover', (event) => {
        const target = event.target;

        
        

        if(randomButton.classList.contains('active')){
            random.style.backgroundColor = randomColor;
            target.style.backgroundColor = randomColor;
        }else if(blackButton.classList.contains('active')){
            
            target.style.backgroundColor = '#000';
        }else if(yourButton.classList.contains('active')){
            target.style.backgroundColor = document.querySelector('.color-change').value;
        };
    });

    
};

let createGrid = (quantity) => {

    blocks.style.gridTemplateColumns = `repeat(${quantity}, 1fr)`;

    for(let i = 0; i < (quantity*quantity); i++) {
        createItem();
    }
};


createGrid(16);

buttons.forEach(button => {
    button.addEventListener('click', () => {
    
    document.querySelector('.active').classList.remove('active');
    button.classList.add('active');
});
});

yourButton.addEventListener('click', () => {
    colorChanger.click();
});

range.addEventListener('input', () => {
    blocks.textContent = '';
    createGrid(range.value);
}); 
