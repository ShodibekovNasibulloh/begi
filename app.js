let tun = document.querySelector(".tun")
let kun = document.querySelector(".kun")
let body = document.querySelector('body')

tun.addEventListener("click" , function(){
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
})

kun.addEventListener("click" , function(){
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
})

