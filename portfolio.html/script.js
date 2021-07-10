let spinnerWrapper = document.querySelector('.loading-screen')

window.addEventListener('load' , function (){
    spinnerWrapper.parentElement.removeChild(spinnerWrapper)
})