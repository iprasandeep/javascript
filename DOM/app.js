// DOM Manipulation


// const title  = document.querySelector('#main-heading');

// title.style.color = 'yellow';

// const listItems = document.querySelectorAll('list-items');


// for(i =0; i<listItems.length; i++)
// {
//     listItems[i].style.fontSize = '5rem';
// }
// console.log(listItems);




// creating elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // Adding elements
// ul.append(li)

// modifying text
// const firstlistitems = document.querySelector('.list-item');

// console.log(firstlistitems.innerText);
// console.log(firstlistitems.textContent);
// console.log(firstlistitems.innerHTML)


// li.innerText = 'X-men';

// li.classList.add('list-item');
// console.log(li.classList.contains('list-item'));
// //remove elements
// li.remove();

// // Modifying Attributes and Classes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('main-heading');

// console.log(title.getAttribute('id'));


let ul = document.querySelector('ul');
const div  =document.querySelector('div');

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);