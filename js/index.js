let btn = document.querySelector('button')
let inputName = document.querySelector('#inputName')
let inputTel = document.querySelector('#inputTel')
let errorMessage = document.querySelector('#error-alert')
let successMessage = document.querySelector('#success-alert')

btn.addEventListener('click', (e) => {
    if(inputName.value != '' && inputTel.value != ''){
        addContato()
        messageShow()
        setTimeout(messageHidden, 3000)
    } else {
        messageShow()
        setTimeout(messageHidden, 3000)
    }

    inputName.value = ''
    inputTel.value = ''
    e.preventDefault()
})

function addContato(){
    let table = document.querySelector('table')
    let contact = document.createElement('tr') 
    contact.innerHTML = '<td>' + inputName.value + '</td>' +
                        '<td>' + inputTel.value + '</td>'
    table.appendChild(contact)
}

function messageShow(){
    if(inputName.value == '' || inputTel.value == ''){
        errorMessage.style.display = 'block'
    } else if(inputName.value != '' && inputTel.value != ''){
        successMessage.style.display = 'block'
    }
}

function messageHidden(){
    errorMessage.style.display = 'none'
    successMessage.style.display = 'none'
}