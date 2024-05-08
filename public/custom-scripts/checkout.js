const queryString = window.location.pathname;
const urlParams = new URLSearchParams(queryString);

// Get the number element and buttons
const jumlahPesanan = document.getElementById("jumlahPesanan");
const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const hargaHewan = 6240000;

const subtotal = document.querySelector(".subtotal");
const total = document.querySelector(".total");

// Set initial value
let currentValue = 1;

jumlahPesanan.textContent = currentValue;


subtotal.textContent = new Intl.NumberFormat("id-ID").format(
    currentValue * hargaHewan,
);


total.textContent = new Intl.NumberFormat("id-ID").format(
    currentValue * hargaHewan,
);


function updateResult(value) {
    total.textContent = new Intl.NumberFormat("id-ID").format(
        value * hargaHewan,
    );
    subtotal.textContent = new Intl.NumberFormat("id-ID").format(
        value * hargaHewan,
    );
}

// Increment function
function increment() {
    currentValue++;
    if (currentValue >= 1) {
        jumlahPesanan.textContent = currentValue;
        updateResult(currentValue);
    }
}

// Decrement function
function decrement() {
    if (currentValue > 1) {
        currentValue--;
        jumlahPesanan.textContent = currentValue;
        updateResult(currentValue);
    }
}

// Add click event listeners to buttons
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);