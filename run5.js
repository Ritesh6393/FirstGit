let form=document.getElementById('addForm');
let itemList=documnet.getElementById('items');
form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);
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