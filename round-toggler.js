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
btn.addEventListener('click', () => {
    //read the button width and height

    let comStyle = getComputedStyle(btn);
    let initialHeight = parseInt(comStyle.height);

    if (n === 2) {
        let resetHeightNow = parseInt(btn.style.height) / 2.25;
        btn.style.height = `${resetHeightNow}px`;
        btn.style.width = `${resetHeightNow}px`;
        //adjust the border radius
        btn.style.borderRadius = `${resetHeightNow}px`;
        n = 0;
    } else {

        let newHeight = `${initialHeight * 1.5}px`;
        btn.style.height = newHeight;
        btn.style.width = newHeight;
        //adjust the border radius
        btn.style.borderRadius = newHeight;
        n++;
    }

})