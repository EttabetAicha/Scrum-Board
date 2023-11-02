const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
// -----------------------------------------------------------------
let para = document.getElementsByClassName("para");
let plus = document.getElementById("plus");
let inp = document.getElementById("inputValu");
let bx_test = document.getElementById("bx_test");

let boxs = document.querySelectorAll(".your_sprint");
let drag = null;
let empty = document.getElementById("paragra");

plus.onclick = function () {
  if (inp.value != "") {
    bx_test.innerHTML += `<p class="item"  draggable="true">${inp.value}</p>`;
    inp.value = "";
  }
  dragItem();
};
// input
function toggleElement() {
  var element = document.getElementById("myElement");

  if (element.style.display === "none") {
    // If the element is currently hidden, show it
    element.style.display = "block"; // or any other appropriate display value
  } else {
    // If the element is currently visible, hide it
    element.style.display = "none";
  }
}
function aficher() {
  let items = document.getElementById("bx_test");
  if (items.style.display === "none") {
    // If the element is currently hidden, show it
    items.style.display = "block"; // or any other appropriate display value
  } else {
    // If the element is currently visible, hide it
    items.style.display = "none";
  }
}

function shin() {
  let sin = document.getElementById("your_sprint");
  if (sin.style.display === "none") {
    // If the element is currently hidden, show it
    sin.style.display = "block"; // or any other appropriate display value
  } else {
    // If the element is currently visible, hide it
    sin.style.display = "none";
  }
}

//_______________________________drag and drop______________
function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      console.log("drag start");
    });

    item.addEventListener("dragend", function () {
      drag = null;
      console.log("drag end");
    });
    boxs.forEach((even) => {
      even.addEventListener("dragover", function (event) {
        event.preventDefault();
        this.style.background = "rgba(0, 0, 0, 0.04)";
        this.style.color = "rgba(0, 0, 0, 0.7)";
      });
      even.addEventListener("dragleave", function () {
        this.style.background = "white ";
        this.style.color = "rgba(0, 0, 0, 0.721)";
      });
      even.addEventListener("drop", function () {
        this.append(drag);
        this.style.background = "white ";
        this.style.color = "rgba(0, 0, 0, 0.721)";
        empty.style.display = "none";
      });
    });
  });
}
