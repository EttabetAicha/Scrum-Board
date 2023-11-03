const body = document.querySelector('body'),
sidebar = body.querySelector('.sidebar'),
toggle = body.querySelector(".toggle")
toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})
document.body.style.overflow = "hidden";
//making the toggle popup
var popup = document.getElementsByClassName("board-BgLayer")[0];
var closePopup= document.getElementsByClassName("close-board-popup");
var card = document.getElementsByClassName("card-body");

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

var AddLsButton = document.getElementsByClassName('Add-board')[0];
var addPopup = document.getElementsByClassName('board-BgLayer1')[0];
var submitButton = document.getElementsByClassName('submitButton') [0];
var mainBoard = document.getElementsByClassName('Board-centered-buttom')[0];
var list = document.getElementsByClassName('list')[0];
var listTitleInput = document.getElementsByClassName("form-control")[1];
var TitleListText = document.getElementsByClassName("List-HeadText");
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