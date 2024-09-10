
let sum = 0;
const firstElement = document.getElementById("count");

function clickMe(){
    console.log("hello");
    console.log(firstElement);
    sum += 1;
    firstElement.innerText = sum;
}

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click",function(){
sum -= 1;
firstElement.innerText = sum;
})

// function clickMinus(){
//     const firstElement = document.getElementById("count");
//     sum -= 1;
//     firstElement.innerText = sum;
//     }

// const minusBtn = document.getElementById("minus-btn");
// minusBtn.addEventListener("click",clickMinus)