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
let modal = document.querySelector('.modalsadd')
let modalbtn = document.querySelector('.btntwo')
const addtarif = () =>{
    inputname.value = "";
    inputprice.value = "";
    
    modal.classList.remove('modalsadd')
    modal.classList.add('actives')
    if(modal.classList.contains('actives')){
        document.body.style = 'overflow: hidden'
    } else{
        document.body.style = 'overflow: auto'
    }

  
}



const closemodal = () =>{
    modal.classList.remove('actives')
    modal.classList.add('modalsadd')
    document.body.style = 'overflow: auto'
}


let inputname = document.querySelector('.modalsadd .containerInput .names')
let inputprice = document.querySelector('.modalsadd .containerInput .price')

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
          <svg width="35" height="34" onclick = "editmodals(this)" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.333374" width="34" height="34" rx="5" fill="#FFC702"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5374 15.7959L24.3334 13.9999C24.8786 13.4547 25.1513 13.1821 25.297 12.888C25.5743 12.3284 25.5743 11.6715 25.297 11.1119C25.1513 10.8178 24.8786 10.5452 24.3334 9.99994C23.7881 9.45469 23.5155 9.18207 23.2214 9.03633C22.6619 8.75905 22.0049 8.75905 21.4454 9.03633C21.1513 9.18207 20.8786 9.45469 20.3334 9.99994L18.5147 11.8186C19.4786 13.4692 20.8647 14.8448 22.5374 15.7959ZM17.0603 13.2731L10.1898 20.1436C9.76471 20.5686 9.55218 20.7812 9.41244 21.0422C9.27271 21.3033 9.21376 21.5981 9.09587 22.1875L8.48048 25.2645C8.41396 25.5971 8.38069 25.7634 8.4753 25.858C8.56991 25.9526 8.73622 25.9194 9.06883 25.8529L12.1458 25.2375C12.7353 25.1196 13.03 25.0606 13.2911 24.9209C13.5522 24.7812 13.7647 24.5686 14.1898 24.1436L21.0792 17.2542C19.4575 16.2385 18.0858 14.8762 17.0603 13.2731Z" fill="#333333"/>
            </svg>
            <svg width="35" height="34" onclick="deletemodal(this)" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.333374" width="34" height="34" rx="5" fill="#FF5C16"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3334 11H8.33337V14C9.43794 14 10.3334 14.8954 10.3334 16V20C10.3334 22.8284 10.3334 24.2426 11.2121 25.1213C12.0907 26 13.5049 26 16.3334 26H18.3334C21.1618 26 22.576 26 23.4547 25.1213C24.3334 24.2426 24.3334 22.8284 24.3334 20V16C24.3334 14.8954 25.2288 14 26.3334 14V11ZM15.8334 16C15.8334 15.4477 15.3857 15 14.8334 15C14.2811 15 13.8334 15.4477 13.8334 16V21C13.8334 21.5523 14.2811 22 14.8334 22C15.3857 22 15.8334 21.5523 15.8334 21V16ZM20.8334 16C20.8334 15.4477 20.3857 15 19.8334 15C19.2811 15 18.8334 15.4477 18.8334 16V21C18.8334 21.5523 19.2811 22 19.8334 22C20.3857 22 20.8334 21.5523 20.8334 21V16Z" fill="#FAFAFA"/>
              <path d="M15.4015 8.37059C15.5155 8.26427 15.7666 8.17033 16.1159 8.10332C16.4651 8.03632 16.8931 8 17.3334 8C17.7736 8 18.2016 8.03632 18.5509 8.10332C18.9002 8.17033 19.1513 8.26427 19.2652 8.37059" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round"/>
              </svg>
              
        </div>
       
        
       
      </div>`;
      
     
      container.innerHTML += newcontainerInput
      
    })
    
    
      modal.classList.add('modalsadd')
      modal.classList.remove('actives')
      document.body.style = 'overflow: auto'
}



let blocks

let modalsedit = document.querySelector('.modalsedit')
let activeedit = document.querySelector('.activeedit')
const editmodals = (element) =>{
blocks = element.parentNode.parentNode;
modalsedit.classList.remove('modalsedit')
modalsedit.classList.add('activeedit')
let editnames = element.parentNode.parentNode.querySelector('.base').innerHTML
let editprices = element.parentNode.parentNode.querySelector('.bases').innerHTML
modalsedit.innerHTML = `
<div class="containerInputs">
<h4 class="tarif">Тариф "${editnames}" </h4>
<input type="text" placeholder="" value="${editnames}" class="names" onkeypress="noDigits(event)">
<input type="text" placeholder="" value="${editprices}" class="price" >
<div class="container">
<button class="btnfirst" onclick="closeedit()">Закрыть </button>
<button class="btntwo" onclick="edit(this)">Изменить</button>
</div>
</div>
`



}


const closeedit = () =>{
  modalsedit.classList.remove('activeedit')
  modalsedit.classList.add('modalsedit')
  
}



function edit() {
  let inputname = document.querySelector('.activeedit .containerInputs .names').value
  let inputprices = document.querySelector('.activeedit .containerInputs .price').value


  let editcontainer = [
    {
      namesa: inputname,
      pricea: inputprices,
    },
  ]

  editcontainer.forEach((item) => {
    let editblocks = ` 
    <p class="base name">${item.namesa}</p>
    <p class="base price">${item.pricea}</p>
    <div class="container">
      <svg width="34" height="34" onclick="editmodals(this)" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="34" height="34" rx="5" fill="#FFC702"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.204 15.796L24 14C24.5453 13.4548 24.8179 13.1821 24.9636 12.888C25.2409 12.3285 25.2409 11.6715 24.9636 11.112C24.8179 10.8179 24.5453 10.5453 24 10C23.4548 9.45475 23.1821 9.18213 22.888 9.03639C22.3285 8.75911 21.6715 8.75911 21.112 9.03639C20.8179 9.18213 20.5453 9.45475 20 10L18.1814 11.8187C19.1452 13.4693 20.5314 14.8448 22.204 15.796ZM16.7269 13.2731L9.8564 20.1436C9.43134 20.5687 9.21881 20.7812 9.07907 21.0423C8.93934 21.3034 8.88039 21.5981 8.7625 22.1876L8.1471 25.2646C8.08058 25.5972 8.04732 25.7635 8.14193 25.8581C8.23654 25.9527 8.40284 25.9194 8.73545 25.8529L11.8124 25.2375C12.4019 25.1196 12.6966 25.0607 12.9577 24.9209C13.2188 24.7812 13.4313 24.5687 13.8564 24.1436L20.7458 17.2542C19.1241 16.2386 17.7524 14.8763 16.7269 13.2731Z" fill="#333333"/>
        </svg>
        <svg width="34" height="34" onclick="deletemodal(this)"  class="delete" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="34" rx="5" fill="#FF5C16"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26 11H8V14C9.10457 14 10 14.8954 10 16V20C10 22.8284 10 24.2426 10.8787 25.1213C11.7574 26 13.1716 26 16 26H18C20.8284 26 22.2426 26 23.1213 25.1213C24 24.2426 24 22.8284 24 20V16C24 14.8954 24.8954 14 26 14V11ZM15.5 16C15.5 15.4477 15.0523 15 14.5 15C13.9477 15 13.5 15.4477 13.5 16V21C13.5 21.5523 13.9477 22 14.5 22C15.0523 22 15.5 21.5523 15.5 21V16ZM20.5 16C20.5 15.4477 20.0523 15 19.5 15C18.9477 15 18.5 15.4477 18.5 16V21C18.5 21.5523 18.9477 22 19.5 22C20.0523 22 20.5 21.5523 20.5 21V16Z" fill="#FAFAFA"/>
          <path d="M15.0681 8.37059C15.1821 8.26427 15.4332 8.17033 15.7825 8.10332C16.1318 8.03632 16.5597 8 17 8C17.4403 8 17.8682 8.03632 18.2175 8.10332C18.5668 8.17033 18.8179 8.26427 18.9319 8.37059" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round"/>
          </svg>
                      
    </div>
  `


  blocks.innerHTML = editblocks
  })

  modalsedit.classList.add('modalsedit')
  modalsedit.classList.remove('activeedit')
  
}





let deletes

let modalsdelete = document.querySelector('.modalsdelete')
const deletemodal = (element) =>{
  deletes = element.parentNode.parentNode
  let inputnamesa = element.parentNode.parentNode.querySelector('.wrapperrrr .baseContainer .base').innerHTML

 
  modalsdelete.innerHTML = `
  
  <div class="containerInputs">
    <h4 class="tarif">Удалить тариф “${inputnamesa}” ?</h4>
   
  <div class="container">
    <button class="btnfirst" onclick="closedeletemodal()">Закрыть </button>
    <button class="btntwo" onclick="deletez(this)">Удалить</button>
  </div>
  </div>
  



  `;

  

  modalsdelete.classList.remove('modalsdelete')
  modalsdelete.classList.add('activesdelete')
}

const deletez= () => {
  deletes.remove();
  modalsdelete.classList.remove('modalsdelete')
  closedeletemodal()
};


const closedeletemodal = () =>{
  modalsdelete.classList.add('modalsdelete')
  modalsdelete.classList.remove('activesdelete')
}



function search() {                    
  var input = document.querySelector('.finded');
  var filter = input.value.toUpperCase();
  var containers = document.querySelectorAll('.wrapperrrr .baseContainer');
  containers.forEach(function(container) {
    var name = container.querySelector('.base');
    if (name) {
      var txtValue = name.textContent || name.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        container.style.display = '';
      } else {
        container.style.display = 'none';
      }
    }
  });
}
