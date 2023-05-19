let form=document.getElementById('addForm');
let itemList=documnet.getElementById('items');

let item=document.getElementById('filter');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

item.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault();
    let val=document.getElementById('item').value;

    let li=document.createElement('li');

    li.className='list-group-item';
    li.append(document.createTextNode(val));

    let deleteBtn=document.createElement('buttom');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.append(document.createTextNode('X'));

    li.append(deleteBtn);



    itemList.append(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete'));
    let li=e.target.parentElement;
    itemList.removeChild(li);
}

function filterItems(e){
    let text=e.target.value.toLowerCase();

    let items=itesmList.getElementById('li');

    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf('text')!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}