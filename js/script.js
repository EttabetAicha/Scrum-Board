const body = document.querySelector('body'),
sidebar = body.querySelector('.sidebar'),
toggle = body.querySelector(".toggle")
toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})
document.body.style.overflow = "hidden";
//making the toggle popup
var popup = document.getElementsByClassName("board-BgLayer")[0];
var closePopup= document.getElementsByClassName("close-board-popup")[0];
var card = document.getElementsByClassName("card-body");

closePopup.addEventListener('click', closeP);
for (var i=0; i<card.length;i++) {
    card[i].addEventListener('click', openP);
}
function closeP () {
    popup.style.display = "none";
}
function openP () {
    popup.style.display = "flex";
}
//making the drag and drop function