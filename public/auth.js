const users = [
    {
    id: 1,
    login: 'vlad',
    password: '123',
    }
]



const auth = () =>{
    let login = document.getElementById('text').value 
    let password = document.getElementById('pas').value
    console.log(login)
    console.log(password)
    users.forEach(user => {
        if(user.login === login && user.password === password){
            window.location = 'index.html';
            
        }
    })
   
}
