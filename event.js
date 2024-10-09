//option 1: directly set on the HTML element
// <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

// option 2: add onclick funtion on the HTML 
//[we will use this sometime]

//<button onclick="makeRed()">Make Red</button>

function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// Option 3:
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 3 another 
const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

//option 4

const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click',makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 another

const greenBtn = document.getElementById('make-green');
greenBtn.addEventListener('click', function makeGreen(){
document.body.style.backgroundColor = 'green';
});

// option 4 final 
//[we will use this sometime]

// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})

