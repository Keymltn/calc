let fir = document.querySelector("#fir").value
let second = document.querySelector("#second").value
let third = document.querySelector("#third").value
let btn = document.querySelector("#btn").value

calc(fir, second, third, btn);

function calc(f, s, t, b) {
    btn.addEventListener("click" , () => {
        console.log(eval = (+f + +s + t));
    })
}