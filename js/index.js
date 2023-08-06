let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let btn = document.querySelector('button')
let errorMessage = document.querySelector('#error-alert')
let successMessage = document.querySelector('#success-alert')

btn.addEventListener('click', (e) => {
    if(inputA.value > inputB.value){
        messageShow()
        setTimeout(messageHidden, 3000)
    } else {
        messageShow()
        setTimeout(messageHidden, 3000)
    }

    e.preventDefault()
    inputA.value = ''
    inputB.value = ''
})

function messageShow(){
    if(inputA.value > inputB.value){
        errorMessage.style.display = 'block'
    } else if(inputA.value < inputB.value){
        successMessage.style.display = 'block'
    }
}

function messageHidden(){
    errorMessage.style.display = 'none'
    successMessage.style.display = 'none'
}