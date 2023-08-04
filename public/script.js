let modalactive = document.querySelector('.activeadd')
let openmodal = document.querySelector('.wrapper .containerbutton .btn')
let modal = document.querySelector('.modaladd')
let modalbtn = document.querySelector('.modaladd .container .btntwo')
let modalbtnfirst = document.querySelector('.btnfirst')




const addtarif = () =>{
    inputname.value = "";
    inputlicense.value = "";
    inputtrack.value = "";
    inputprice.value = "";
    modal.classList.remove('modaladd')
    modal.classList.add('activeadd')
    if(modal.classList.contains('activeadd')){
      document.body.style = 'overflow: hidden'
  } else{ 
      
      document.body.style = 'overflow: auto'
  }
  modalbtnfirst.addEventListener('click', function(){
    document.body.style = 'overflow: auto'
  })  
  
}



modalbtn.addEventListener('click', function(){
  if(modal.classList.contains('activeadd')){
    document.body.style = 'overflow: hidden'
} else{
    
    document.body.style = 'overflow: auto'
}
})

function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
    }

const closemodal = () =>{
  
    modal.classList.remove('activeadd')
    modal.classList.add('modaladd')
    modaledit.classList.add('modaledit')
    modaledit.classList.remove('activeedit')
    modaldelete.classList.add('modaldelete')
    modaldelete.classList.remove('activedelete')

}


let inputname = document.querySelector('.modaladd .containerInput .names')
let inputlicense = document.querySelector('.modaladd .containerInput .license')
let inputtrack = document.querySelector('.modaladd .containerInput .track')
let inputprice = document.querySelector('.modaladd .containerInput .price')

const addition = () => {
    let inputtrackvalue = parseFloat(inputtrack.value);
    let inputlicensevalue = parseFloat(inputlicense.value);
    let inputnamevalue = inputname.value
    if (!inputtrackvalue || !inputlicensevalue || inputnamevalue.trim().length === 0) {
      
      
      return;
  }
    let container = document.querySelector('.add');
    let containerInput = [
        {
          names: inputname.value,
          tracks: inputtrackvalue,
          licens: inputlicensevalue,
          price: inputprice.value,
        },
      ];
      
      containerInput.forEach((item) => {
        let newcontainerInput = `<div class="baseContainer" >
        <p class="base name">${item.names}</p>
        <p class="base lic">${item.licens}</p>
        <p class="base track">${item.tracks}</p>
        <p class="base price">${item.price}</p>
        <div class="container">
          <svg width="34" height="34" onclick="editmodal(this)" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="5" fill="#FFC702"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.204 15.796L24 14C24.5453 13.4548 24.8179 13.1821 24.9636 12.888C25.2409 12.3285 25.2409 11.6715 24.9636 11.112C24.8179 10.8179 24.5453 10.5453 24 10C23.4548 9.45475 23.1821 9.18213 22.888 9.03639C22.3285 8.75911 21.6715 8.75911 21.112 9.03639C20.8179 9.18213 20.5453 9.45475 20 10L18.1814 11.8187C19.1452 13.4693 20.5314 14.8448 22.204 15.796ZM16.7269 13.2731L9.8564 20.1436C9.43134 20.5687 9.21881 20.7812 9.07907 21.0423C8.93934 21.3034 8.88039 21.5981 8.7625 22.1876L8.1471 25.2646C8.08058 25.5972 8.04732 25.7635 8.14193 25.8581C8.23654 25.9527 8.40284 25.9194 8.73545 25.8529L11.8124 25.2375C12.4019 25.1196 12.6966 25.0607 12.9577 24.9209C13.2188 24.7812 13.4313 24.5687 13.8564 24.1436L20.7458 17.2542C19.1241 16.2386 17.7524 14.8763 16.7269 13.2731Z" fill="#333333"/>
            </svg>
            <svg width="34" height="34" onclick="deletemodal(this)" class="delete" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="34" height="34" rx="5" fill="#FF5C16"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26 11H8V14C9.10457 14 10 14.8954 10 16V20C10 22.8284 10 24.2426 10.8787 25.1213C11.7574 26 13.1716 26 16 26H18C20.8284 26 22.2426 26 23.1213 25.1213C24 24.2426 24 22.8284 24 20V16C24 14.8954 24.8954 14 26 14V11ZM15.5 16C15.5 15.4477 15.0523 15 14.5 15C13.9477 15 13.5 15.4477 13.5 16V21C13.5 21.5523 13.9477 22 14.5 22C15.0523 22 15.5 21.5523 15.5 21V16ZM20.5 16C20.5 15.4477 20.0523 15 19.5 15C18.9477 15 18.5 15.4477 18.5 16V21C18.5 21.5523 18.9477 22 19.5 22C20.0523 22 20.5 21.5523 20.5 21V16Z" fill="#FAFAFA"/>
              <path d="M15.0681 8.37059C15.1821 8.26427 15.4332 8.17033 15.7825 8.10332C16.1318 8.03632 16.5597 8 17 8C17.4403 8 17.8682 8.03632 18.2175 8.10332C18.5668 8.17033 18.8179 8.26427 18.9319 8.37059" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round"/>
              </svg>
                          
        </div>
      </div>`;
      
      
      container.innerHTML += newcontainerInput
      
    })
    

      modal.classList.add('modaladd')
      modal.classList.remove('activeadd')
    
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
    inputprice.value = totalPrice  +  "₸";
} else {
    inputprice.value =   "";
    
}



}

inputlicense.addEventListener('input', updatePrice);
inputtrack.addEventListener('input', updatePrice);


let blocks

let modaledit = document.querySelector('.modaledit')
let activeedit = document.querySelector('.activeedit')
const editmodal = (element) =>{
  blocks = element.parentNode.parentNode;
  modaledit.classList.remove('modaledit')
    modaledit.classList.add('activeedit')
    let editname = element.parentNode.parentNode.querySelector('.base.name').innerHTML
    let editlic = element.parentNode.parentNode.querySelector('.base.lic').innerHTML
    let edittrack = element.parentNode.parentNode.querySelector('.base.track').innerHTML
    let editprice = element.parentNode.parentNode.querySelector('.base.price').innerHTML
    modaledit.innerHTML = `
      
    <div class="containerInput">
      <h4 class="tarif">Тариф "${editname}" </h4>
      <input type="text" placeholder="" value="${editname}" class="names" onkeypress="noDigits(event)">
    <input type="number" placeholder="" value="${editlic}" class="license" >
    <input type="number" placeholder="" value="${edittrack}" class="track"  >
    <input type="text" placeholder="" value="${editprice}" class="price" readonly>
    <div class="container">
      <button class="btnfirst" onclick="closemodal()">Закрыть </button>
      <button class="btntwo" onclick="edit(this)">Изменить</button>
    </div>
    </div>
    
  

  `
  

 
}

function edit() {
  let inputtrackvalue = document.querySelector('.activeedit .containerInput .track').value
  let inputlicensevalue = document.querySelector('.activeedit .containerInput .license').value
  let inputname = document.querySelector('.activeedit .containerInput .names').value
  let inputprices = document.querySelector('.activeedit .containerInput .price').value

  let inputtrackvalues = parseFloat(inputtrackvalue);
  let inputlicensevalues = parseFloat(inputlicensevalue);
  let full
  
  if (!isNaN(inputlicensevalue) && !isNaN(inputtrackvalue)) {
        if (!inputtrackvalue || !inputlicensevalue || inputname.trim().length === 0) {
          return;
      }
    

    if (inputlicensevalues <= 3) {
      full = inputlicensevalues * (inputtrackvalues * 2000)
    } else if (inputlicensevalues <= 5) {
      full = inputlicensevalues * (inputtrackvalues * 1800)
    } else if (inputlicensevalues > 5) {
      full = inputlicensevalues * (inputtrackvalues * 1680)
    }
    inputprices.value = full + "₸"
  } else {
    inputprices.value = ""
  }

  let editcontainer = [
    {
      namesa: inputname,
      tracksa: inputtrackvalue,
      licensa: inputlicensevalue,
      pricea: inputprices,
    },
  ]

  editcontainer.forEach((item) => {
    let editblocks = ` 
    <p class="base name">${item.namesa}</p>
    <p class="base lic">${item.licensa}</p>
    <p class="base track">${item.tracksa}</p>
    <p class="base price">${item.pricea}</p>
    <div class="container">
      <svg width="34" height="34" onclick="editmodal(this)" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  modaledit.classList.add('modaledit')
  modaledit.classList.remove('activeedit')
  
}





function updatePrices() {
  let inputtrackvalue = document.querySelector('.activeedit .containerInput .track').value
  let inputlicensevalue = document.querySelector('.activeedit .containerInput .license').value

  let inputtrackvalues = parseFloat(inputtrackvalue);
  let inputlicensevalues = parseFloat(inputlicensevalue);
  let full
  
  if (!isNaN(inputlicensevalues) && !isNaN(inputtrackvalues)) {
    if (!inputtrackvalue || !inputlicensevalue) {
      return;
    }

    if (inputlicensevalues <= 3) {
      full = inputlicensevalues * (inputtrackvalues * 2000)
    } else if (inputlicensevalues <= 5) {
      full = inputlicensevalues * (inputtrackvalues * 1800)
    } else if (inputlicensevalues > 5) {
      full = inputlicensevalues * (inputtrackvalues * 1680)
    }
    let inputpricesa = document.querySelector('.activeedit .containerInput .price')
    inputpricesa.value = full + "₸"
    
  }




}




let trackInput = document.querySelector(' .containerInput .track').value;

let licenseInput = document.querySelector(' .containerInput .license').value;

addEventListener('input', updatePrices);



















let deletes

let modaldelete = document.querySelector('.modaldelete')
const deletemodal = (element) =>{
  deletes = element.parentNode.parentNode
  let inputnamesa = element.parentNode.parentNode.querySelector('.wrapper .baseContainer .base.name').innerHTML

 
  modaldelete.innerHTML = `
  
  <div class="containerInput">
    <h4 class="tarif">Удалить тариф “${inputnamesa}” ?</h4>
   
  <div class="container">
    <button class="btnfirst" onclick="closemodal()">Закрыть </button>
    <button class="btntwo" onclick="deletez(this)">Удалить</button>
  </div>
  </div>
  



  `;

  

  modaldelete.classList.remove('modaldelete')
  modaldelete.classList.add('activedelete')
}

const deletez= () => {
  deletes.remove();
  modaldelete.classList.remove('modaldelete')
  closemodal()
};