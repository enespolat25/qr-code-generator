/*! QRious v4.0.2 | (C) 2017 Alasdair Mercer | GPL v3 License
Based on jsqrencode | (C) 2010 tz@execpc.com | GPL v3 License
https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js
*/
const input = document.querySelector("#qrCodeTextArea");
const canvas = document.getElementById("qr");

const createQR = v => {
  // https://github.com/neocotic/qrious
  return new QRious({
    element: canvas,
    value: v,
    level: "L",
    size: 400,
    backgroundAlpha: 0,
    foreground: "white" });

};

const qr = createQR(input.value);

input.addEventListener("input", () => {
  const qr = createQR(input.value);
});