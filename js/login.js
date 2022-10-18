const submitBtn = document.getElementById('form-button')
const username = document.getElementById('username')
const password = document.getElementById('password')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')

    if(!username.value || !password.value){
        alert("Please enter a username or password")
    } else if((username.value !== storedUsername)||(password.value !== storedPassword)){
        alert("Incorrect username or password")
    } else {
        window.location.pathname = "/index.html"
    }
})