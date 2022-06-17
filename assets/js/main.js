const header = document.querySelector(".header").innerHTML
const headerDesktop = document.querySelector(".header-desktop")
const register = document.querySelector('.front')
const registerBtn = document.querySelector('.register-button')

headerDesktop.innerHTML = header


inView('.header')
.on('enter', el=>headerDesktop.classList.remove('visible'))
   
.on('exit', el => headerDesktop.classList.add ('visible'))

registerBtn.addEventListener("click", ()=>{
    register.classList.add('open')
})

inView('.fade')
.on('enter', img=>img.classList.add('visible'))
   
.on('exit', img => img.classList.remove('visible'))

registerBtn.addEventListener("click", event=>{
    event.preventDefault()
    register.classList.add('slide-up')
})

VanillaTilt.init(document.querySelectorAll(".image"),{
    max: 25,
    speed:400
})