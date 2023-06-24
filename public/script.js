let modalactive = document.querySelector('.active')
let openmodal = document.querySelector('.wrapper .containerbutton .btn')
let modal = document.querySelector('.modal')
const addtarif = () =>{
    inputname.value = "";
    inputlicense.value = "";
    inputtrack.value = "";
    inputprice.value = "";
    modal.classList.remove('modal')
    modal.classList.add('active')
    
}

function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
    }

const closemodal = () =>{
    modal.classList.remove('active')
    modal.classList.add('modal')
}


let inputname = document.querySelector('.modal .containerInput .name')
let inputlicense = document.querySelector('.modal .containerInput .license')
let inputtrack = document.querySelector('.modal .containerInput .track')
let inputprice = document.querySelector('.modal .containerInput .price')
const addition = () => {
   
}



function updatePrice() {

    const projectCount = parseInt(inputlicense.value);
    const tariffCount = parseInt(inputtrack.value);



if (!isNaN(projectCount) && !isNaN(tariffCount)) {

    if (projectCount <= 3) {
      totalPrice = projectCount * (tariffCount * 2000);
    } else if (projectCount <= 5) {
      totalPrice = projectCount *  (tariffCount * 1800);
    } else if (projectCount > 5){
        totalPrice = projectCount * (tariffCount * 1680);
    }
    inputprice.value = totalPrice + "₸";
} else {
    inputprice.value = "";
}



}

inputlicense.addEventListener('input', updatePrice);
inputtrack.addEventListener('input', updatePrice);
