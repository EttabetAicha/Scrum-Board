const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

function addUsers() {
  let name = $("#addUsers #name").val();
  let email = $("#addUsers #email").val();
  let role = $("#addUsers select").val();

  let lastIndex = parseInt($("table tbody tr:last").data("index"));
  lastIndex++;

  let newRow =
    "<tr>" +
    '  <th scope="row"><img src="/images/avatar2.png"></th>' +
    "  <td>" +
    name +
    "</td>" +
    "  <td>" +
    email +
    "</td>" +
    "  <td>" +
    role +
    "</td>" +
    "  <td>" +
    '    <svg class="feather feather-edit" data-toggle="modal" data-target="#editUser" data-index="' +
    lastIndex +
    '" onclick="prepareEditUser(this)" fill="#85B6FF" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">' +
    '      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />' +
    '      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />' +
    "    </svg>" +
    '    <svg data-toggle="modal" data-target="#deleteUser" data-index="' +
    lastIndex +
    '" onclick="prepareDeleteUser(this)" fill="#F24E1E" height="24" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">' +
    '      <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z" />' +
    '      <path d="M0 0h48v48H0z" fill="none" />' +
    "    </svg>" +
    "  </td>" +
    "</tr>";

  $("table tbody").append(newRow);

  $("#addUsers").modal("hide");
  return false;
}

function prepareDeleteUser(el) {
  let index = $(el).data("index");

  $("#rowToDelete").val(index);
}

// function deleteUser() {
//   if (confirm("Are you sure you want to delete this user?")) {
//     const user = event.target.parentElement.parentElement.parentElement;
//     user.remove();
//   }
// }

function deleteUser() {
  let index = $("#rowToDelete").val();
  $("#userTableBody tr:eq(" + index + ")").remove();
  $("#deleteUser").modal("hide");
}

function prepareEditUser(el) {
  let index = $(el).data("index");
  let row = $("#userTableBody tr:eq(" + index + ")");
  let name = row.find("td:eq(0)").text();
  let email = row.find("td:eq(1)").text();
  let role = row.find("td:eq(2)").text();

  $("#editUser #name").val(name);
  $("#editUser #email").val(email);
  $("#editUser select").val(role);

  $("#editUser #rowIndex").val(index);
}

function updateUser() {
  let name = $("#editUser #name").val();
  let email = $("#editUser #email").val();
  let role = $("#editUser select").val();
  let index = $("#editUser #rowIndex").val();

  $("#userTableBody tr:eq(" + index + ")")
    .find("td:eq(0)")
    .text(name);
  $("#userTableBody tr:eq(" + index + ")")
    .find("td:eq(1)")
    .text(email);
  $("#userTableBody tr:eq(" + index + ")")
    .find("td:eq(2)")
    .text(role);

  $("#editUser").modal("hide");
  return false;
}

function changePicture(event) {
  var image = document.getElementById("project-avatar");
  image.src = URL.createObjectURL(event.target.files[0]);
}
