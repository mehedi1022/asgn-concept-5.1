console.log('first file');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTittles = document.getElementsByClassName('section-title');
console.log(allTittles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';

// document.querySelectorAll NodeList
// document.querySelector Node 1st

const sectionList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'My dynamic item';
sectionList.appendChild(li);

const main = document.getElementById('man-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My dynamic section</h1>
<p>Extra page added inside paragraph</p>
<ul>
<li>first item</li>
<li>two item</li>
<li>third item</li>
<li>fourth item</li>
</ul>
`
main.appendChild(section);