// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const input = document.getElementById("qrinput");
const generateBtn = document.querySelector(".generateBtn");
const generateImg = document.getElementById("generateImg");
const download = document.querySelector(".download");
const scanme = document.querySelector(".scanme");

const qetQr = () => {
  const typeInput = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
  if (input.value) {
    generateImg.src = typeInput;
    scanme.style.display = "flex";
    download.href = typeInput;
  } else {
    scanme.style.display = "none";
    generateImg.src = "";
  }
};

input.addEventListener("input", qetQr);
