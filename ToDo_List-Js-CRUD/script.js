var selectedRow = null;

// Show Alert :-

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");

    container.insertBefore(div, main);

    setTimeout(() => div.remove(), 3000);
}

let itemTable= [];


// // Create Data:-

// document.querySelector("#student-form").addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     const firstName = document.querySelector("#firstName").value;
//     const lastName = document.querySelector("#lastName").value;
//     const rollNo = document.querySelector("#rollNo").value;

//     if(firstName !== "" && lastName !== "" && rollNo !== "" ) {
//         createItem( firstName, lastName, rollNo);
//     }
// });


// function createItem(firstName, lastName, rollNo) {
//     const newItem = {firstName, lastName, rollNo};
//     itemTable.push(newItem);
//     console.log(itemTable);
//     addDataToTable(newItem);
//     showAlert("Student Data Created", "success");
//     clearField(); // Clear form fields after adding data
// }

// //  Add Submitted Data to the Table

// function addDataToTable(item){
//     const tableBody = document.querySelector("#student-list");
//     const newRow = tableBody.insertRow();

//     newRow.innerHTML = `
//         <td>${item.firstName}</td>
//         <td>${item.lastName}</td>
//         <td>${item.rollNo}</td>
//         <td>
//             <a href="" class="btn btn-warning btn-sm edit" onclick="editItem(this)">Edit</a>
//             <a href="" class="btn btn-danger btn-sm delete" onclick="deleteItem(this)">Delete</a>
//         </td>
//     `;
//     clearField();
// }

// clear all the field:-

function clearField (){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";
};

// //  delete Data:-

// //  document.querySelector("student-list").addEventListener("click", (e) => {
// //     target = e.target;
// //     if(target.classList.contains("delete")){
// //         target.parentElement.parentElement.remove();
// //         showAlert("Student Data Deleted", "danger");
// //     }
// //  })

// function deleteItem(row) {
//     const rowIndex = row.parentElement.parentElement.rowIndex;
//     document.querySelector("#student-list").deleteRow(rowIndex);
//     showAlert("Student Data Deleted", "danger");
// }

//   // Edit Data:-
// function editItem(row) {};


// Add Data

document.querySelector("#student-form").addEventListener("submit",(e) => {
    e.preventDefault();
    
    // Get form Value
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value; 

    // validate
    if(firstName == "" || lastName == "" || rollNo == ""){
        showAlert("please fill in all the fields", "danger");
    }else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${rollNo}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
                `;

                list.appendChild(row);
                selectedRow = null;
                showAlert("Student Added", "success");
                clearField ();
        }else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert("Student Info Edited", "success");
            clearField ();
        }
    }
} ); 

//  edit Data

document.querySelector("#student-list").addEventListener("click" , (e) => {
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
    };
})

// Delete Data

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    };
});

