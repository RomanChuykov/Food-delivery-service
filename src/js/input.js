const inputField = document.getElementById('inputField')
const errorText = document.querySelector('.errorText')
inputField.addEventListener('input', checkInput)

function checkInput (evt) {
    const email = evt.currentTarget.value
    const pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email)
    if(pattern) {
        inputField.classList.add('valid')
        inputField.classList.remove('error')
        errorText.textContent = " "
    }
    else {
        inputField.classList.remove('valid');
        inputField.classList.add('error');
        const imgSrc = '../img/error.svg';
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.classList.add('errorIcon')
        imgElement.style.display = 'inline'
        imgElement.style.marginRight = '4px'
        imgElement.style.marginLeft = '12px'
        errorText.textContent = '';
        errorText.appendChild(imgElement);
        errorText.insertAdjacentHTML('beforeend', 'Please enter a valid email address');
    }
}
