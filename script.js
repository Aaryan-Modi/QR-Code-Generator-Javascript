const qrText = document.getElementById("inp");
const qrBody = document.getElementById("qrcode");
const generateBtn = document.querySelector(".generate");
const downloadBtn = document.querySelector(".download");

generateBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    qrText.value.length > 0 ?  qrCodeGenerator() : alert("Input is Empty! Please add Text to Generate QR Code");
});

downloadBtn.addEventListener("click", (e)=>{
    let img = document.querySelector("qrcode img");

    if(img != null){
        let imgAttr = img.getAttribute("src");
        downloadBtn.setAttribute("href", imgAttr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }
});

function qrCodeGenerator() {
    qrBody.innerHTML = "";
    new QRCode(qrBody, {
        text: qrText.value,
        width: "300",
        height: "300",
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L  // Highest error correction
    });
}

