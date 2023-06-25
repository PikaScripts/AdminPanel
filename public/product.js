let outline = document.querySelector('.find')

let loupe = document.querySelector('.loupe')
let loupestrok = document.querySelector('.loupestrok')

document.addEventListener('click', function(event){
    let clicked = event.target
    outline.style = 'outline: auto'
    loupe.style = ' stroke: #333333'
    loupestrok.style = ' stroke: #333333'
    
    if(outline.contains(clicked)){
        return
    }
    outline.style = 'outline: none'
    loupestrok.style = ' stroke: #D5D5D5'
    loupe.style = ' stroke: #D5D5D5'
    
})

