/*
1. How to use js with html and css

2. Get element and elements from dom
2.1 getElementById
2.2 getElementsByClassName
2.3 querySelector
2.4 querySelectorAll

3. dynamically add element to the dom: document.createElement
3.5 set value to  the innerHTML

4. get value from a dom element
4.1 use innerText (h1, p, h5, div, span, strong)
4.2 use value (input, textArea)

5. add event lister(click handler)
5.1 click, focus, blur, onchange, keyup
5.2 addEventListener onclick="myHandler()"

6. use function to reduce duplicate code

7. event bubble and event delegate

*/

// document.querySelectorAll('.users-container .disable h3');
// document.querySelectorAll('.my-users li');

// validation js 

// const number = '23';
// if(typeof number === 'number'){
//     console.log('value is number');
// }else{
//     console.log('value is not a number');
// }

// const numbers = [3, 12, 78, 90];
// const student = {name: 'Rongila Rafsan', job: 'khaw'}
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(student));
// console.log(typeof student);

console.log(isNaN(56));
console.log(isNaN('ab'));
console.log(isNaN([]));
console.log(isNaN({}));
console.log(isNaN([5]));
