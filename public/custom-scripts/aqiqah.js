const allInputHewan = document.querySelectorAll("input.hewan-select");
const allInputLaukUtama = document.querySelectorAll("input.laukutama-select");
const allInputLaukPendamping = document.querySelectorAll("input.laukpendamping-select")
const allInputSayur = document.querySelectorAll("input.sayur-select")
const allInputNasi = document.querySelectorAll("input.nasi-select")

const linkWA = document.getElementById("linkWA");

function convertSpacesToPercent20(inputString) {
    let result = inputString.replace(/ /g, "%20");
    return result;
}


let pesanPilihanHewan = "";
let pesanPilihanLaukUtama = "";
let pesanPilihanLaukPendamping = "";
let pesanPilihanSayur = ""
let pesanPilihanNasi = ""

function updateFormatPesan() {
    let formatPesanWAbaru = `Assalamu'alaikum admin Qurbanplus, insyaAllah saya ingin pesan Aqiqah. ${pesanPilihanHewan} %0D%0A${pesanPilihanLaukUtama} %0D%0A${pesanPilihanLaukPendamping} %0D%0A${pesanPilihanSayur} %0D%0A${pesanPilihanNasi}`;
    let formatURLWA = `${convertSpacesToPercent20(formatPesanWAbaru)}`;

    linkWA.href = `https://wa.me/6281293150101?text=${formatURLWA}`;
}

function updatePesanHanyaHewan() {
    let formatPesanWAbaru = `Assalamu'alaikum admin Qurbanplus, insyaAllah saya ingin pesan Aqiqah. ${pesanPilihanHewan}`
    let formatURLWA = `${convertSpacesToPercent20(formatPesanWAbaru)}`;
    linkWA.href = `https://wa.me/6281293150101?text=${formatURLWA}`;
}

allInputHewan.forEach((input) => {
    input.addEventListener("click", function () {
        pesanPilihanHewan = `%0D%0ARincian pemesanan sebagai berikut: %0D%0APaket: *${this.dataset.kategori}* %0D%0AJenis domba: *${this.dataset.jenisDomba} ${this.value} ekor*.`;
        updatePesanHanyaHewan();
    });
});

allInputLaukUtama.forEach((input) => {
    input.addEventListener("click", function () {
        pesanPilihanLaukUtama = `Pilihan lauk utama: *${this.value}*.`;
        updateFormatPesan();
    });
});

allInputLaukPendamping.forEach((input) => {
    input.addEventListener("click", function () {
        pesanPilihanLaukPendamping = `Lauk pendamping: *${this.value}*.`
        updateFormatPesan()
    })
})

allInputSayur.forEach((input) => {
    input.addEventListener("click", function () {
        pesanPilihanSayur = `Sayur: *${this.value}*.`
        updateFormatPesan()
    })
})

allInputNasi.forEach((input) => {
    input.addEventListener("click", function () {
        pesanPilihanNasi = `Nasi: *${this.value}*.`
        updateFormatPesan()
    })
})
