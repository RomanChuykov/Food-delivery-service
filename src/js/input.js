function checkInput () {
    const inputField = document.getElementById('inputField')
    const inputValue = inputField.value
    const errorText = document.getElementById('errorText')
    const patternValid = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
        if(!patternValid.test(inputField)) {
            errorText.textContent = "Please enter a valid email address"
            errorText.classList.add('error');
        }
        else {
            errorText.textContent = ' '
            errorText.classList.remove('error')
        }
        return errorText
};