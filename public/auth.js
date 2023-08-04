const users = [
    {
    id: 1,
    login: 'vladN',
    password: '123',
    },
    {
    id: 2,
    login: 'semen',
    password: '128', 
    },
    {
    id: 3,
    login: 'danilG',
    password: '1233'
    },
    {
    id: 4,
    login: 'julia',
    password: '888'
    },
    {
    id: 5,
    login: 'vladK',
    password: '777'
    },
    {
    id: 6,
    login: 'danilK',
    password: '555'
    },
    {
    id: 6,
    login: 'tima',
    password: '333'
        },
    
]

geronusers = [
    {
        id:1,
        login: 'ilya',
        password: '123'
    }
]

const auth = () =>{
    let login = document.getElementById('text').value 
    let password = document.getElementById('pas').value
    users.forEach(user => {
        if(user.login === login && user.password === password){
            window.location = 'index.html';
            
        }
        
    })
   
    geronusers.forEach(geronuser =>{
        if(geronuser.login === login && geronuser.password === password){
            window.location = ' rofl.html';
        }
    })
}
