let secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor="yellow"

let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = "hidden";

let items=document.querySelectorAll('li');
items[1].style.color="green";

let items1=document.querySelectorAll('li:nth-child(odd)');
for(let item of items){
    item.style.backgroundColor='green';
}