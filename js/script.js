{
    const welcome = () => {
        console.log("Hejka!!")
    };

    const toggleBackground = () => {
        const colorBackground = document.querySelector(".backgroundBodyColor");
        const colorModelName = document.querySelector(".colorModelName")

        colorBackground.classList.toggle("body__white");
        colorModelName.innerText = colorBackground.classList.contains("body__white") ? "białe" : "domyślne";
    };

    const init = () => {

        const changebuttonElement = document.querySelector(".js-button");

        changebuttonElement.addEventListener("click", toggleBackground);

        welcome();

    };

    init();

}