let selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  let formData = readFormdata();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  onReset();
}
// Retrive the data
function readFormdata() {
  let formData = {};
  formData["prodCode"] = document.getElementById("prodCode").value;
  formData["prodName"] = document.getElementById("prodName").value;
  formData["prodqty"] = document.getElementById("prodqty").value;
  formData["prodprice"] = document.getElementById("prodprice").value;
  return formData;
}
function insertNewRecord(data) {
  let childTable = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0]; //get the value and store
  // Here it store the values  when we adding row
  let newRow = childTable.insertRow(childTable.length);
  // Adding cell to each column from text
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.prodCode;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.prodName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.prodqty;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.prodprice;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick = "onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>`;
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement; // using we can get particular variable
  document.getElementById("prodCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("prodName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("prodqty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("prodprice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  // I want to mention and their id's
  selectedRow.cells[0].innerHTML = formData.prodCode;
  selectedRow.cells[1].innerHTML = formData.prodName;
  selectedRow.cells[2].innerHTML = formData.prodqty;
  selectedRow.cells[3].innerHTML = formData.prodprice;
}
function onDelete(td) {
  if (confirm("Do You want to delete this record")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    onReset();
  }
}
function onReset() {
  document.getElementsById("prodCode").value = "";
  document.getElementsById("prodName").value = "";
  document.getElementsById("prodqty").value = "";
  document.getElementsById("prodprice").value = "";
  selectedRow = null;
}
