// let itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.lastElementChild);
// console.log(itemList.lastChild);

let newChild=document.createElement('div');
newChild.className="childClass";
newChild.setAttribute('id','inside-child');
let newText=document.createTextNode('Hello world');
newChild.append(newText);

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(newChild,h1);

let newLi=document.createElement('li');
newLi.className="newLi";
let liText=document.createTextNode("Hello World");
newLi.append(liText);
console.log(newLi)
let classItem=document.querySelector('.list-group');
let liItem=document.querySelector('.list-group-item');
classItem.insertBefore(newLi,liItem);
