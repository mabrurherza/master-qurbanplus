
const buttonSalin = document.getElementById("buttonSalin");
const toast = document.querySelector(".toast");

function copyText() {
    const text = document.getElementById("nomorVA").innerText;

    navigator.clipboard
        .writeText(text)
        .then(() => {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);
        })
        .catch((err) => {
            console.error("Gagal menyalin teks: ", err);
        });
}

buttonSalin.addEventListener("click", copyText);
