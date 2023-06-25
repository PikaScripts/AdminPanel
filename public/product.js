let outline = document.querySelector('.find')

let loupe = document.querySelector('.activesvg')
let loupestrok = document.querySelector('.noactivesvg')

document.addEventListener('click', function(event){
    let clicked = event.target
    outline.style = 'outline: auto'
    loupe.style = 'display: block'
    loupestrok.style = 'display: none'
    if(outline.contains(clicked)){
        return
    }
    outline.style = 'outline: none'
    loupe.style = 'display: none'
    loupestrok.style = 'display: block'
})

function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
    }

let modalactive = document.querySelector('.actives')
let openmodal = document.querySelector('.wrapperrrr .containerproduct .containerbutton .btn')
let modal = document.querySelector('.modals')
const addtarif = () =>{
    // inputname.value = "";
    // inputlicense.value = "";
    // inputtrack.value = "";
    // inputprice.value = "";
    modal.classList.remove('modals')
    modal.classList.add('actives')
    
}


const closemodal = () =>{
    modal.classList.remove('actives')
    modal.classList.add('modals')
}