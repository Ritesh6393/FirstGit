const form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();





    const ExpenseAmount=document.getElementById('expenseamount').value;
    const Description=document.getElementById('Description').value;
    const Category=document.getElementById('category').value;
    
    const newData={
        ExpenseAmount:ExpenseAmount,
        Description:Description,
        Category:Category,
    
    }

    localStorage.setItem(newData.ExpenseAmount,JSON.stringify(newData));
    showDataOnScreen(newData);

});
function showDataOnScreen(newData){
    const parentElem=document.getElementById('list-items');
    const childElem=document.createElement('li');
    const delButton=document.createElement('button');
    
    childElem.textContent=newData.ExpenseAmount+'-'+newData.Description+'-'+newData.Category;
    delButton.textContent='Delete';
    delButton.onclick=()=>{
        localStorage.removeItem(newData.ExpenseAmount);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(delButton);
    parentElem.appendChild(childElem);
    const editButton=document.createElement('button');
    editButton.textContent='Edit';
    childElem.appendChild(editButton);
    editButton.onclick=()=>{
        localStorage.removeItem(newData.ExpenseAmount);
        parentElem.removeChild(childElem);
        document.getElementById('expenseamount').value=newData.ExpenseAmount;
        document.getElementById('Description').value=newData.Description;
        document.getElementById('category').value=newData.Category;
    }
}    