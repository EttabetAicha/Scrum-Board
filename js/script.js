const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle");
  var popup = document.getElementsByClassName("board-BgLayer")[0];
  var closePopup= document.getElementsByClassName("close-board-popup");
  var card = document.getElementsByClassName("card-body");
  var AddLsButton = document.getElementsByClassName('Add-board')[0];
  var addPopup = document.getElementsByClassName('board-BgLayer1')[0];
  var submitButton = document.getElementsByClassName('submitButton') [0];
  var mainBoard = document.getElementsByClassName('Board-centered-buttom')[0];
  var list = document.getElementsByClassName('list')[0];
  var listTitleInput = document.getElementsByClassName("form-control")[1];
  var TitleListText = document.getElementsByClassName("List-HeadText");
  document.body.style.overflow = "hidden";
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
var tasks = [
  {
    id: "Task 1",
    name: "Aicha task",
    start: "2023-10-30",
    end: "2023-11-02",
    progress: 20,
    dependencies: "Task 0",
    custom_class: "bar-milestone", // optional
  },

  {
    id: "Task 2",
    name: "hamza task",
    start: "2023-10-30",
    end: "2023-11-04",
    progress: 20,
    dependencies: "Task 1",
    custom_class: "bar-milestone", // optional
  },

  {
    id: "Task 3",
    name: "abdelah task",
    start: "2023-10-30",
    end: "2023-11-05",
    progress: 20,
    dependencies: "Task 2",
    custom_class: "bar-milestone", // optional
  },
  {
    id: "Task 4",
    name: "younsse task",
    start: "2023-10-30",
    end: "2023-11-06",
    progress: 20,
    dependencies: "Task 2",
    custom_class: "bar-milestone", // optional
  },
];
var gantt = new Gantt("#gantt", tasks, {
  header_height: 50,
  column_width: 30,
  step: 24,
  view_modes: ["Quarter Day", "Half Day", "Day", "Week", "Month"],
  bar_height: 20,
  bar_corner_radius: 3,
  arrow_curve: 5,
  padding: 18,
  view_mode: "Day",
  date_format: "YYYY-MM-DD",
  language: "en", // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
  custom_popup_html: null,
});
document.getElementById("btn").addEventListener("click", function () {
  gantt.change_view_mode("Week");
  console.log("changed to week");
});
document.getElementById("btn1").addEventListener("click", function () {
  gantt.change_view_mode("Month");
  console.log("changed to mouth");
});
document.getElementById("btn2").addEventListener("click", function () {
  gantt.change_view_mode("Day");
  console.log("changed to day");
});

//making the toggle popup


closePopup[0].addEventListener('click', closeP);
for (var i=0; i<card.length;i++) {
    card[i].addEventListener('click', openP);
}
function closeP () {
    popup.style.display = "none";
}
function openP () {
    popup.style.display = "flex";
}
//making the add list function

submitButton.addEventListener('click',submitList);
AddLsButton.addEventListener('click',openPadd);
closePopup[1].addEventListener('click',closePadd);

function submitList () {
    
    var listCopy = list.cloneNode(true);

    addPopup.style.display = "none";
    var childElement = listCopy.children[0];
    var lastElement = mainBoard.children[3];
    var childchildElement = childElement.children[0];
    childchildElement.textContent=listTitleInput.value;
    console.log(mainBoard.lastChild);
    mainBoard.insertBefore(listCopy,lastElement);

}
function openPadd () {
    addPopup.style.display = "flex";
}
function closePadd () {
    console.log("eyy");
    addPopup.style.display = "none";
}