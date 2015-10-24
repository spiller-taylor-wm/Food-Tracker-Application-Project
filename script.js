/**
 * Created by session2 on 10/20/15.
 */
var nameBox, descBox, dateBox, lifeBox, expBox;


function add(){
    nameBox = document.getElementById('name').value;
    descBox = document.getElementById('desc').value;
    dateBox = document.getElementById('date').value;
    lifeBox = document.getElementById('life').value;
    expBox = document.getElementById('exp').value;
    updateTable();
    clearForm();
}

function updateTable() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var inputs = [nameBox, descBox, dateBox, lifeBox, expBox];

    /** Adds individual cells to the row */
    for(var i = 0; i < 5; i++){
        var cell = row.insertCell(i);
        cell.innerHTML = inputs[i];
        /** Changes cell color to red if shelf life <= 3 days */
        if(parseInt(lifeBox) <= 3) {
            row.style.backgroundColor = 'red';
        }
    }
}

/** Empties the form elements */
function clearForm() {
    document.getElementById("myForm").reset();
}

function removeRow(){

}