// Edit form

const namaPemesan = document.getElementById("namaPemesan");
const nomorWhatsapp = document.getElementById("nomorWhatsapp");
const alamatEmail = document.getElementById("alamatEmail");
const selectKota = document.getElementById("selectKota");
const selectKecamatan = document.getElementById("selectKecamatan");
const alamatRumah = document.getElementById("alamatRumah");

const editButton = document.querySelector("#btnEdit");
const simpanButton = document.querySelector("#btnSimpan");

editButton.addEventListener("click", toggleEdit);

function toggleEdit() {
    const elementsToToggle = [
        namaPemesan,
        nomorWhatsapp,
        alamatEmail,
        selectKota,
        selectKecamatan,
        alamatRumah,
    ];

    elementsToToggle.forEach((element) => {
        element.disabled = false;
    });

    simpanButton.style.display = "block";
}

function simpan() {
    const elementsToToggle = [
        namaPemesan,
        nomorWhatsapp,
        alamatEmail,
        selectKota,
        selectKecamatan,
        alamatRumah,
    ];

    elementsToToggle.forEach((element) => {
        element.disabled = true;
    });

    simpanButton.style.display = "none";
}

simpanButton.addEventListener("click", simpan);