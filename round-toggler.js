//access the button element 
let btn = document
    .firstElementChild
    .lastElementChild
    .firstElementChild
// find the button at list in 2 or 3 methods
let btn1 = document.querySelector('button');
let btn2 = document.getElementsByTagName('button')[0];
let btnByClass = document.getElementsByClassName('plus')[0];
let btnById = document.getElementById('plusButton');

console.log(btn1);
console.log(btn2);
console.log(btnByClass);
console.log(btnById);


//Add an event listener 

let n = 0;
console.log(n);

//add a helper function
const bntSize= function (size, k) {
    return btn.style.size= `${parseInt(btn.style.size) * k}px`;
}


btn.addEventListener('click', () => {
    //read the button width and height

    let comStyle = getComputedStyle(btn);
    let initialHeight = parseInt(comStyle.height);

    if (n === 2) {
        btnSize('height', 100/225);
        btnSize('width', 100/225);
        //adjust the border radius
        btnSize('borderRadius', 100/225);        
        n = 0;
    } else {

        btnSize('height', 1.5);
        btnSize('width', 1.5);
        //adjust the border radius
        btnSize('borderRadius', 1.5);   
        n++;
    }

})
