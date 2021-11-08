const p1 = document.querySelector(".p1");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const memberCard = document.querySelectorAll(".member-card");
const memberText = document.querySelectorAll(".member-text");
const productName = document.querySelector(".product-navn")
const productDescription = document.querySelector(".product-beskrivelse")
const form = document.querySelector(".contact-right")

for(let i=0; i<memberCard.length; i++){
    
    memberCard[i].onmouseover = () => {
        memberText[i].style.display = "block";
    }
    memberCard[i].onmouseleave = () => {
        
        memberText[i].style.display = "none";
    }
}


const bilder = [
    {"bilde": "./img/product2_liggende.jpg", "tittel": "Rise light module", "beskrivelse":"Tired of waking up in a pitch black room? Connect your Rise Modular Alarm Clock to your room lights with this module. When your clock rings, the lights automatically turn on, helping your brain wake up."},
    {"bilde": "./img/product1_liggende.jpeg", "tittel": "Rise alarm clock", "beskrivelse":"The Rise Modular Alarm Clock is designed to make the process of waking up more comfortable, while being customizable to the customer’s needs. Choose between several modules (sold separately) to connect to the clock to tailor the morning experience just for you."}
];


let interval 
let loaded = false
let i = 0
let stopSlide = false
let slidesLength = 2;

const slideshow = (p) => {

    if(i >= bilder.length) {
        i = 0;  
      } 
      
      
    const bakgrunn = bilder[i].bilde;
      
      
      p1.style.backgroundImage = `linear-gradient(to bottom, rgb(86 79 95 / 64%),rgb(79 30 83 / 39%)),
      url(${bakgrunn})`;  
      
      productName.innerHTML = bilder[i].tittel
      productDescription.innerHTML = bilder[i].beskrivelse
      
      i++;
    

    /*if(bilder.length > 0 ){
        
        //Går til neste slide
        if(p !== "previous"){
            if(i >= slidesLength ) {
                i = 0
            }
        }
        
        //Går til forrige slide
        if(p === "previous"){
            if(i > slidesLength){
                i = slidesLength - 1
            }

            if(i === 1){
                i = slidesLength + 1
            }
            
            i--
        }

        //Kjører slideshow som vanlig
        else{
            i++
        }

        const bakgrunn = bilder[i];
  
  
        p1.style.backgroundImage = `linear-gradient(to bottom, rgb(86 79 95 / 64%),rgb(79 30 83 / 39%)),
        url(${bakgrunn})`; 
        
    }*/

}

//Toggler mellom play og pause ikonene
//Stopper og kjører slideshow avhenging av ikonene
const toggle = (evt) => {
    evt.stopPropagation()
    stopSlide = !stopSlide

    if(stopSlide){
        stopSlideshow()
    }

    else{
        nextMovie()
    }
}

//Går til neste slide manuelt
const nextMovie = (param) => {
    if(!stopSlide){
        slideshow(param)
        interval = clearInterval(interval)
        interval = setInterval(slideshow, 3000)
    }
    else{
        slideshow(param)
    }
    
}


//Stopper slideshow
const stopSlideshow = () => {
    interval = clearInterval(interval)
}

interval = setInterval(slideshow, 3000)

leftArrow.onclick = () => {
    nextMovie("previous")
}

rightArrow.onclick = () => {
    nextMovie()
}


form.onsubmit = () => {
    alert("hh")
}