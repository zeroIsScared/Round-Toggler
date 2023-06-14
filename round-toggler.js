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

// console.log(btn1);
// console.log(btn2);
// console.log(btnByClass);
// console.log(btnById);


//Add an event listener 

let n = 0;
console.log(n);

//add a helpper function
const btnSize= function (currentHeight, k) {
    let newHeight= currentHeight * k;
    btn.style.height= `${newHeight}px`;
    btn.style.width= `${newHeight}px`;
    btn.style.borderRadius= `${newHeight}px`;
}


btn.addEventListener('click', () => {
    //read the button width and height

    let comStyle = getComputedStyle(btn);

    if (n === 2) {

        btnSize(parseInt(btn.style.height), 100/225);              
        n = 0;

    } else {

        btnSize(parseInt(comStyle.height), 1.5);
        n++;

    }

})
