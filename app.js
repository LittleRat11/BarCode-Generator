const input = document.querySelector("#input");
const btn = document.querySelector("#barcode-btn");
// *generate barcode
btn.addEventListener("click", () => {
    JsBarcode("#barcode", input.value, {
        format: "code128",
        displayValue: true,
        fontSize: 24,
        lineColor: "#000",
    });
    input.value = "";
});