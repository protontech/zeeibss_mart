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
    } else if(storedPassword === null || storedUsername === null) {
        alert("Your account does not exist")
    }
    else {
        window.location.pathname = "/zeeibss_mart/index.html";
    }
})