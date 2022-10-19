const username = document.getElementById('username')
const password = document.getElementById('password')

const submitBtn = document.getElementById('form-btn')
submitBtn.addEventListener('click', () => {
    localStorage.setItem('username', username.value)
    localStorage.setItem('password', password.value)

    window.location.pathname = "/zeeibss_mart/index.html";
})
