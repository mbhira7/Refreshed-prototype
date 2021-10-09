const memberCard = document.querySelectorAll(".member-card");
const memberText = document.querySelectorAll(".member-text");


for(let i=0; i<memberCard.length; i++){
    memberCard[i].onmouseover = (evt) => {
        memberText[i].style.display = "block";
        memberText[i].style.tra
    }
    memberCard[i].onmouseout = (evt) => {
        memberText[i].style.display = "none";
    }
}
