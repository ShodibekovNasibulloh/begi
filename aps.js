let btn = document.querySelectorAll("button")
  let title = document.querySelector("h2")
  let javob = document.querySelector(".teng")

for (let i = 0; i < 12; i++) {
    btn[i].addEventListener('click', function () {
        title.innerHTML = title.innerHTML + btn[i].innerHTML
    })
}
javob.addEventListener("click", function () {
    title.innerHTML = eval(title.innerHTML)
})
