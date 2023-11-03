const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
// -----------------------------------------------------------------
// let para = document.getElementsByClassName("para");
let plus = document.getElementById("plus");
let inp = document.getElementById("inputValue");
let boxs = document.querySelectorAll(".your_sprint");
let bx_test = document.getElementById("bx_test");
let drag = null;
let empty = document.getElementById("paragra");
plus.onclick = function () {
  if (inp.value != "") {
    bx_test.innerHTML += `
    
    <p class="item" draggable="true" >
    <span>  
    <input type="checkbox">
    <i class='bx bx-bookmarks' style='color:green' ></i>
    ${inp.value}  
    <i id="pen" class="fa-solid fa-pen"></i>
    </span>
    <span class="btn-group">
  <button   class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small button
  </button>
  <ul class="dropdown-menu">
    
  </ul>
</span>


    </p>
   `;
    inp.value = "";
  }
  dragItem();
};
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

// input
function toggleElement() {
  var element = document.getElementById("myElement");

  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
function aficher() {
  let items = document.getElementById("bx_test");
  if (items.style.display === "none") {
    items.style.display = "block";
  } else {
    items.style.display = "none";
  }
}
function shin() {
  let sin = document.getElementById("your_sprint");
  if (sin.style.display === "none") {
    sin.style.display = "block";
  } else {
    sin.style.display = "none";
  }
}
