let items=document.getElementsByTagName("li");

console.log(items);
/*for(let item of items){
    item.style.color="green";
}*/

let items1=document.getElementsByClassName("list-group-item");
for(let item of items1){
    item.style.color="yellow";
}

