let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
    if(inputA.value < inputB.value){
        let errorMessage = document.querySelector('#error-alert')
        errorMessage.style.display = 'block'
    } else {
        errorMessage.style.display = 'none'
    }

    e.preventDefault()
    inputA.value = ''
    inputB.value = ''

})