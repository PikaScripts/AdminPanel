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

