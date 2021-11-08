const memberCard = document.querySelectorAll(".member-card");
const memberText = document.querySelectorAll(".member-text");
const cb = document.querySelector("#cb");

for(let i=0; i<memberCard.length; i++){
    
    memberCard[i].onmouseover = () => {
        memberText[i].style.display = "block";
    }
    memberCard[i].onmouseleave = () => {
        
        memberText[i].style.display = "none";
    }
}


window.onresize = () => {
    if(window.innerWidth > 600){
        cb.checked = false;
        document.body.style.overflow = "scroll";
    }

}

cb.onclick = () => {
    if(cb.checked && window.innerWidth <= 600){
        document.body.style.overflow = "hidden";
    }
    else{
        document.body.style.overflow = "scroll";
    }
    
}
