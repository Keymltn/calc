let fir = document.querySelector("#fir")
let second = document.querySelector("#second")
let third = document.querySelector("#third")
let btn = document.querySelector("#btn")
let h12 = document.getElementById("h12")

btn.addEventListener("click" , (e) => {
    e.preventDefault()
    h12.innerHTML = eval(fir.value + second.value + third.value);
})