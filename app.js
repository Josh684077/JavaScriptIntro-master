function addItem() {

    const textarea = document.getElementById('todoText');
    const itemList = document.getElementById("itemList");

    
    var enteredToDoItem = textarea.value;

    //Return if text area is empty
    if(enteredToDoItem == ''){
        return;
    }

    const newText = document.createTextNode(enteredToDoItem);

    const newRow = document.createElement("div");
    newRow.className = "row";

    const newParentDiv = document.createElement("div");
    newParentDiv.className = "col-md-6 col-xxl-4 mt-3";

    const newFirstChildDiv = document.createElement("div");
    newFirstChildDiv.className = "card";

    const newSecondChildDiv = document.createElement("div");
    newSecondChildDiv.className = "card-body";

    newRow.appendChild(newParentDiv);
    newParentDiv.appendChild(newFirstChildDiv);
    newFirstChildDiv.appendChild(newSecondChildDiv);
    newSecondChildDiv.appendChild(newText);

    
    itemList.appendChild(newParentDiv);

    textarea.value = '';
}