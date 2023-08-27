console.log("Hejka!!")

const changebuttonElement = document.querySelector(".js-button");
let colorBackground = document.querySelector(".backgroundBodyColor");
let colorModelName = document.querySelector(".colorModelName")

changebuttonElement.addEventListener("click", () => {
    colorBackground.classList.toggle("body__white");
    colorModelName.innerText = colorBackground.classList.contains("body__white") ? "białe" : "domyślne";
});

