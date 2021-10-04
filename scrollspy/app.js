let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
};
window.onload = () => {
document.getElementById('btn-prev').addEventListener('click', (e) => {
    e.preventDefault();
    jsp_prev_page();
});
document.getElementById('btn-next').addEventListener('click', (e) => {
    e.preventDefault();
    jsp_next_page();
});
jsp_change_page(1);
};

var selectedRow = null

function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }
        resetForm();
        
}

function readFormData() {
    var formData = {};
    formData["playername"] = document.getElementById("playername").value;
    formData["country"] = document.getElementById("country").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.playername;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.country;
}

function resetForm() {
    document.getElementById("playername").value = "";
    document.getElementById("country").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("playername").value = selectedRow.cells[0].innerHTML;
    document.getElementById("country").value = selectedRow.cells[1].innerHTML;
   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.playername;
    selectedRow.cells[1].innerHTML = formData.country;
  
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
      resetForm();
    }
}
function myFunction() {
   
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


