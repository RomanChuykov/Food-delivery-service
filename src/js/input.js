const inputField = document.getElementById('inputField')
const errorText = document.getElementById('errorText')
inputField.addEventListener('blur', checkInput)

function checkInput (evt) {
    const email = evt.currentTarget.value
    const pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email)
    if(pattern) {
        inputField.classList.add('valid')
        inputField.classList.remove('error')
        errorText.textContent = " "
    }
    else {
        inputField.classList.remove('valid')
        inputField.classList.add('error')
        errorText.textContent = "Please enter a valid email address"
    }
}

