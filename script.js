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

function initialiseButtons () {
    const buttons = document.querySelectorAll(".button")
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
        })
    })
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        const popUps = document.querySelectorAll(".pop-up");
        popUps.forEach(popUp => {
            popUp.classList.add("not-visible");
        });
    })
}

popUpVisible();