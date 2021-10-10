const memberCard = document.querySelectorAll(".member-card");
const memberText = document.querySelectorAll(".member-text");
const quantityMinus = document.querySelector("#quantity-minus");
const quantityPlus = document.querySelector("#quantity-plus");
const quantityDisplay = document.querySelector("#quantity-display");


for(let i=0; i<memberCard.length; i++){
    memberCard[i].onmouseover = (evt) => {
        memberText[i].style.display = "block";
        memberText[i].style.tra
    }
    memberCard[i].onmouseout = (evt) => {
        memberText[i].style.display = "none";
    }
}

let quantity = 1;

quantityPlus.onclick = () => {
    if(quantity >= 0){
        quantity++
    }
    quantityDisplay.innerHTML = quantity
}

quantityMinus.onclick = () => {
    if(quantity > 0){
        quantity--
    }
    quantityDisplay.innerHTML = quantity
}

