/**
 * Created by session2 on 10/20/15.
 */
var nameBox, descBox, dateBox, lifeBox, expBox, inputs;

function add(){
    nameBox = document.getElementById('name').value;
    descBox = document.getElementById('desc').value;
    dateBox = document.getElementById('date').value;
    lifeBox = document.getElementById('life').value;
    expBox = document.getElementById('exp').value;
    inputs = [nameBox, descBox, dateBox, lifeBox, expBox];
    if(nameBox == "" || descBox == "" || dateBox == "" || lifeBox == "" || expBox == ""){
        /** Checks if any boxes are empty */
        confirm("Please input a complete form.");
    } else if (isNaN(parseInt(lifeBox)) == true){
        /** Checks if shelf life is a number because it must be in order for the red highlighting to work properly */
        confirm("Shelf life must be a number of days.");
    } else {
        updateTable();
        clearForm();
    }
}

/** Adds input to table */
function updateTable() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);

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