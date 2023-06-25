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
let modalbtn = document.querySelector('.btntwo')
const addtarif = () =>{
    inputname.value = "";
    inputprice.value = "";
    
    modal.classList.remove('modals')
    modal.classList.add('actives')
    if(modal.classList.contains('actives')){
        document.body.style = 'overflow: hidden'
    } else{
        document.body.style = 'overflow: auto'
    }
}

modalbtn.addEventListener('click', function(){
    document.body.style = 'overflow: auto'
})


const closemodal = () =>{
    modal.classList.remove('actives')
    modal.classList.add('modals')
    document.body.style = 'overflow: auto'
}


let inputname = document.querySelector('.modals .containerInput .names')
let inputprice = document.querySelector('.modals .containerInput .price')

const addition = () => {
    
    let inputnamevalue = inputname.value
    if (!inputprice || inputnamevalue.trim().length === 0) {
      
      
      return;
  }
    let container = document.querySelector('.add');
    let containerInput = [
        {
          names: inputname.value,
          price: inputprice.value,
        },
      ];
      
      containerInput.forEach((item) => {
        let newcontainerInput = `<div class="baseContainer">
        <p class="base">${item.names}</p>
        <div class="container">
          <p class="bases">${item.price}₸</p>
          
            
        </div>
        <div class="container">
          <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.333374" width="34" height="34" rx="5" fill="#FFC702"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5374 15.7959L24.3334 13.9999C24.8786 13.4547 25.1513 13.1821 25.297 12.888C25.5743 12.3284 25.5743 11.6715 25.297 11.1119C25.1513 10.8178 24.8786 10.5452 24.3334 9.99994C23.7881 9.45469 23.5155 9.18207 23.2214 9.03633C22.6619 8.75905 22.0049 8.75905 21.4454 9.03633C21.1513 9.18207 20.8786 9.45469 20.3334 9.99994L18.5147 11.8186C19.4786 13.4692 20.8647 14.8448 22.5374 15.7959ZM17.0603 13.2731L10.1898 20.1436C9.76471 20.5686 9.55218 20.7812 9.41244 21.0422C9.27271 21.3033 9.21376 21.5981 9.09587 22.1875L8.48048 25.2645C8.41396 25.5971 8.38069 25.7634 8.4753 25.858C8.56991 25.9526 8.73622 25.9194 9.06883 25.8529L12.1458 25.2375C12.7353 25.1196 13.03 25.0606 13.2911 24.9209C13.5522 24.7812 13.7647 24.5686 14.1898 24.1436L21.0792 17.2542C19.4575 16.2385 18.0858 14.8762 17.0603 13.2731Z" fill="#333333"/>
            </svg>
            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.333374" width="34" height="34" rx="5" fill="#FF5C16"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3334 11H8.33337V14C9.43794 14 10.3334 14.8954 10.3334 16V20C10.3334 22.8284 10.3334 24.2426 11.2121 25.1213C12.0907 26 13.5049 26 16.3334 26H18.3334C21.1618 26 22.576 26 23.4547 25.1213C24.3334 24.2426 24.3334 22.8284 24.3334 20V16C24.3334 14.8954 25.2288 14 26.3334 14V11ZM15.8334 16C15.8334 15.4477 15.3857 15 14.8334 15C14.2811 15 13.8334 15.4477 13.8334 16V21C13.8334 21.5523 14.2811 22 14.8334 22C15.3857 22 15.8334 21.5523 15.8334 21V16ZM20.8334 16C20.8334 15.4477 20.3857 15 19.8334 15C19.2811 15 18.8334 15.4477 18.8334 16V21C18.8334 21.5523 19.2811 22 19.8334 22C20.3857 22 20.8334 21.5523 20.8334 21V16Z" fill="#FAFAFA"/>
              <path d="M15.4015 8.37059C15.5155 8.26427 15.7666 8.17033 16.1159 8.10332C16.4651 8.03632 16.8931 8 17.3334 8C17.7736 8 18.2016 8.03632 18.5509 8.10332C18.9002 8.17033 19.1513 8.26427 19.2652 8.37059" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round"/>
              </svg>
              
        </div>
       
        
       
      </div>`;
      
     
      container.innerHTML += newcontainerInput
      
    })
    
    
      modal.classList.add('modals')
      modal.classList.remove('actives')
      
}

