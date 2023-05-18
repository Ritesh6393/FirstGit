let classElement=document.getElementsByClassName("list-group-item");
console.log(classElement);
for(let i=0;i<classElement.length;i++){
    if(i==2){
        classElement[i].style.backgroundColor="green";
    }
    classElement[i].style.fontWeight="900";
}