const inputPhone = document.getElementById('input-phone')
const errorText = document.querySelector('.errorText')
inputPhone.addEventListener('input', checkPhone)

function checkPhone (evt) {
    const number = evt.currentTarget.value
    const pattern = /^\+380\d{9}$/.test(number)
    if(pattern) {
        inputPhone.classList.add('valid')
        inputPhone.classList.remove('error')
        errorText.textContent = " "
    }
    else {
        inputPhone.classList.remove('valid');
        inputPhone.classList.add('error');
        const imgSrc = '../img/error.svg';
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.classList.add('errorIcon')
        imgElement.style.display = 'inline'
        imgElement.style.marginRight = '4px'
        imgElement.style.marginLeft = '12px'
        errorText.textContent = '';
        errorText.appendChild(imgElement);
        errorText.insertAdjacentHTML('beforeend', ' This phone must be in the format  099 000 00 00');
    }
}