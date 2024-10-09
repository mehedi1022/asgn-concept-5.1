function handleOnClick(){
const handler = document.getElementById('handler-status');
handler.innerText = 'handler by function attached on onclick attribute';

}

// option 2
document.getElementById('event-lisenter').addEventListener('click', function(){
    const handler = document.getElementById('handler-status');
    handler.innerText = 'Text updated by add Event listener button';
})

// option 2 recap 

document.getElementById('btn-update').addEventListener('click', function(){
const inputField = document.getElementById('input-field');
const inputText = inputField.value;

const p = document.getElementById('input-text-display');
p.innerText = inputText;
inputField.value = '';

})