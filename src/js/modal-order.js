const inputName = document.getElementById('input-name')
const errorText = document.querySelector('.errorText')
inputName.addEventListener('input', checkName)

function checkName (evt) {
    const name = evt.currentTarget.value
    const pattern = /[a-zA-Zа-яА-Я]+/.test(name)
    if(pattern) {
        inputName.classList.add('valid')
        inputName.classList.remove('error')
        errorText.textContent = " "
    }
    else {
        inputName.classList.remove('valid');
        inputName.classList.add('error');
        const imgSrc = '../img/error.svg';
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.classList.add('errorIcon')
        imgElement.style.display = 'inline'
        imgElement.style.marginRight = '4px'
        imgElement.style.marginLeft = '12px'
        errorText.textContent = '';
        errorText.appendChild(imgElement);
        errorText.insertAdjacentHTML('beforeend', 'The name must contain letters');
    }
}

