let modalactive = document.querySelector('.active')
let openmodal = document.querySelector('.wrapper .containerbutton .btn')
let modal = document.querySelector('.modal')
const addtarif = () =>{
    modal.classList.remove('modal')
    modal.classList.add('active')
}

const closemodal = () =>{
    modal.classList.remove('active')
    modal.classList.add('modal')
}


let inputname = document.querySelector('.modal .containerInput .name')
let inputlicense = document.querySelector('.modal .containerInput .license')
let inputtrack = document.querySelector('.modal .containerInput .track')
const addition = () => {
    let nameinput = inputname.value
    let licenseinput = inputlicense.value
    let trackinput = inputtrack.value
    
}