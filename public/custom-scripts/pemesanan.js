const forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
        "submit",
        function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add("was-validated");
        },
        false,
    );
});

// Opsi nominal bayar
const inputNominal = document.querySelector(".input-nominal");
const bayarPenuh = document.getElementById("bayarPenuh");
const bayarCicil = document.getElementById("bayarCicil");

bayarPenuh.addEventListener("change", function () {
    if (this.checked) {
        inputNominal.classList.remove("d-flex"); // Hide input text if option 1 is selected
    }
});

bayarCicil.addEventListener("change", function () {
    if (this.checked) {
        inputNominal.classList.add("d-flex"); // Show input text if option 2 is selected
    }
});

//! Fungsi untuk show/hide pilihan opsi penyembelihan dan form shohibul qurban
const containerPenyembelihan = document.getElementById(
    "containerPenyembelihan",
);
const containerFormShohibulQurban = document.getElementById(
    "containerFormShohibulQurban",
);

document
    .querySelectorAll('input[name="Penyaluran"]')
    .forEach((radio) => {
        radio.addEventListener("change", (event) => {
            if (event.target.value === "Penyaluran1") {
                containerPenyembelihan.style.display = "none";
                containerFormShohibulQurban.style.display = "block";
            } else if (
                event.target.value === "Penyaluran2" ||
                event.target.value === "Penyaluran3"
            ) {
                containerPenyembelihan.style.display = "block";
                containerFormShohibulQurban.style.display = "none";
            } else if (event.target.value === "Penyaluran4") {
                containerPenyembelihan.style.display = "block";
                containerFormShohibulQurban.style.display = "block";
            }
        });
    });

//! Fungsi copy values dari form pemesan ke shohibul qurban
const copyCheckbox = document.getElementById("copyCheckbox");
const formShohibulQurban1 = document.getElementById(
    "formShohibulQurban-1",
);

function consoleLogOnChange() {
    console.log('Select value has changed.');
    // You can perform additional actions here based on the value change
}

copyCheckbox.addEventListener("change", () => {
    if (copyCheckbox.checked) {
        document
            .querySelectorAll(
                "#formPemesan input, #formPemesan select, #formPemesan textarea",
            )
            .forEach((leftInput, index) => {
                const rightInput = formShohibulQurban1.querySelectorAll(
                    "input, select, textarea",
                )[index];

                console.log(leftInput.value)
                console.log(rightInput[0])

                if (rightInput) {
                    rightInput.value = leftInput.value;
                }
            });
    } else {
        // Clear right form when checkbox is unchecked
        formShohibulQurban1.reset();
    }
});


//! Angka total bayar:
const labelAngkatBayarPenuh = document.querySelector('label[for="bayarPenuh"]');
const dataSampelBayarValue = labelAngkatBayarPenuh.getAttribute('data-sampelbayar');
const inputAngkatBayarPenuh = document.querySelector('input[id="bayarPenuh"]');

const angkaBayarPenuh = document.getElementById("sampelAngkaBayarPenuh")
const subTotal = document.getElementById("subTotal")
const totalBayar = document.getElementById("totalBayar")

inputAngkatBayarPenuh.addEventListener("click", () => {
    const angka = new Intl.NumberFormat("id-ID").format(
        dataSampelBayarValue
    )
    angkaBayarPenuh.textContent = `RP${angka}`
    subTotal.textContent = `RP${angka}`
    totalBayar.textContent = `RP${angka}`
})

inputNominal.addEventListener('input', function (event) {
    let inputValue = event.target.value
    inputValue = inputValue.replace(/[.,]/g, '');
    event.target.value = inputValue;

    const angka = new Intl.NumberFormat("id-ID").format(
        inputValue
    )

    subTotal.textContent = `RP${angka}`
    totalBayar.textContent = `RP${angka}`
})


