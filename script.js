function popUpVisible () {
    const addBookButton = document.querySelector(".add-book-button");
    addBookButton.addEventListener("click", () => {
        const popUps = document.querySelectorAll(".pop-up");
        popUps.forEach(popUp => {
            popUp.classList.remove("not-visible");
        });
    });
    initialiseButtons();
}

function initialiseButtons() {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
        });
    });

    function closePopUp() {
        const popUps = document.querySelectorAll(".pop-up");
        popUps.forEach(popUp => {
            popUp.classList.add("not-visible");
        });
        const inputs = document.querySelectorAll("input:not(.button)");
        inputs.forEach(input => {
            input.value = "";
        });
    }

    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", closePopUp);

    const background = document.querySelector(".pop-up-container");
    background.addEventListener("click", (event) => {
        if (!event.target.closest('.pop-up-window')) {
            closePopUp();
}});
}

popUpVisible();