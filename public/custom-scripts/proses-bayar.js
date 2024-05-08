const bayarCicil = document.getElementById("bayarCicil");
const bayarPenuh = document.getElementById("bayarPenuh");
const subTotalText = document.getElementById("subTotalText");
const total = document.getElementById("totalBayar")

let angkaSubtotal;
let potongan = 0;

bayarPenuh.addEventListener("click", function (event) {
    bayarCicil.value = 0;
    angkaSubtotal = bayarPenuh.value;
    total.innerText = parseInt(angkaSubtotal).toLocaleString("id", "ID");
    subTotalText.innerHTML = parseInt(angkaSubtotal).toLocaleString("id", "ID");
})

bayarCicil.addEventListener("keyup", function (event) {
    bayarPenuh.checked = false

    let userInput = event.target.value.replace(/\D/g, '')

    let renderTotalBayar = function () {
        total.innerText = angkaSubtotal.toLocaleString("id", "ID");
    }

    if (userInput === '') {
        bayarPenuh.checked = true;
        event.target.value = 0;
        angkaSubtotal = angkaTotalTagihan;
        subTotalText.innerHTML = angkaSubtotal.toLocaleString("id", "ID");
        renderTotalBayar();
    } else {
        let value = parseInt(userInput, 10);
        event.target.value = value;
        angkaSubtotal = value;
        subTotalText.innerHTML = angkaSubtotal.toLocaleString("id", "ID");
        renderTotalBayar();
    }

})
