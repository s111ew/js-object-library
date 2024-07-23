function popUpVisible() {
    const addBookButton = document.querySelector(".add-book");
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
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", addBooktoLibrary)
}

function removeButtonInitialise(buttonSelector, windowSelector, targetSelector, newDivClass) {
    const closeButtons = document.querySelectorAll(buttonSelector);

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const windowDiv = button.closest(windowSelector);
            if (windowDiv) {
                windowDiv.remove();
                const newDiv = document.createElement('div');
                newDiv.className = newDivClass;

                const targetDiv = document.querySelector(targetSelector);
                if (targetDiv) {
                    
                    targetDiv.parentNode.insertBefore(newDiv, targetDiv.nextSibling);
            }
        }
        });
    });
}

let library = [
    {
        title: "No Country for Old Men",
        author: "Cormac McCarthy",
        genre: "Thriller",
        year: "2005",
        pages: "320",
        read: "on"
    },
    {
        title: "Kiss Me, Judas",
        author: "Christpher Baer",
        genre: "Crime",
        year: "1998",
        pages: "316",
        read: "on"
    }
]

function Book(title, author, genre, year, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const genre = document.querySelector("#genre").value;
    const year = document.querySelector("#year").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;

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

    if (title !== "" && author !== "" && genre !== "") {
        let bookToAdd = new Book(title, author, genre, year, pages, read);
        library.push(bookToAdd);
        closePopUp();
        }
}

removeButtonInitialise(".remove", ".card-container", ".add-book", "card-container");

popUpVisible();