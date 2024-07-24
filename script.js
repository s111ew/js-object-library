function addPopUpEventListeners() {
    const addBookButton = document.querySelector(".add-book");
    addBookButton.addEventListener("click", () => {
        const popUps = document.querySelectorAll(".pop-up");
        popUps.forEach(popUp => {
            popUp.classList.remove("not-visible");
        });
    });
    addButtonEventListeners();
}

function addButtonEventListeners() {
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

function addRemoveButtonEventListeners() {
    let removeButtons = document.querySelectorAll(".remove");
    
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            library.splice(index, 1);
            renderLibrary();
        });
    });

}

let library = []

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
        renderLibrary();
        }
}

function addExampleBooksToLibrary () {
    const exampleBook1 = new Book("No Country for Old Men", "Cormac McCarthy", "Thriller", "2005", "320", "on");
    const exampleBook2 = new Book("Kiss Me, Judas", "Christopher Baer", "Crime", "1998", "316", "on");
    library.push(exampleBook1, exampleBook2);
}

function renderLibrary () {

    let main = document.querySelector(".main");
    main.innerHTML = "";

    // loop through array to create card element for each book

    for (book of library) {
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        let cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");
        cardContainer.appendChild(cardInner);

        let cardFront = document.createElement("div");
        cardFront.classList.add("card-front", "book-cover");
        cardInner.appendChild(cardFront);

        let cardTitle = document.createElement("span");
        cardTitle.classList.add("title");
        cardTitle.textContent = `${book.title}`;
        cardFront.appendChild(cardTitle);

        let cardAuthor = document.createElement("span");
        cardAuthor.classList.add("author");
        cardAuthor.textContent = `${book.author}`
        cardFront.appendChild(cardAuthor);

        let cardBack = document.createElement("div");
        cardBack.classList.add("card-back", "book-cover");
        cardInner.appendChild(cardBack);

        let removeButton = document.createElement("span");
        removeButton.classList.add("remove");
        removeButton.textContent = "x";
        cardBack.appendChild(removeButton);

        let cardGenre = document.createElement("span");
        cardGenre.classList.add("genre");
        cardGenre.textContent = `genre: ${book.genre}`;
        cardBack.appendChild(cardGenre);
        
        if (book.year !== "") {
            let cardYear = document.createElement("span");
            cardYear.classList.add("year");
            cardYear.textContent = `year: ${book.year}`;
            cardBack.appendChild(cardYear);
        }

        if (book.pages !== "") {
            let cardPages = document.createElement("span");
            cardPages.classList.add("pages");
            cardPages.textContent = `pages: ${book.pages}`;
            cardBack.appendChild(cardPages);
        }

        let cardRead = document.createElement("span");
        cardRead.classList.add("read");
        if (book.read === "on") {
            cardRead.textContent = `read: Yes`
        } else {
            cardRead.textContent = `read: No`
        }
        cardBack.appendChild(cardRead);

        let main = document.querySelector(".main");
        main.appendChild(cardContainer);
    }

    // create "add-book" card

    let addBookContainer = document.createElement("div");
    addBookContainer.classList.add("card-container", "add-book");

    if (library.length < 8) {let addBook = document.createElement("span");
    addBook.classList.add("add-book-button");
    addBook.textContent = "+";
    addBookContainer.appendChild(addBook);
    main.appendChild(addBookContainer);}

    for (let i = 0; i < (7 - library.length); i++) {
        let cardContainerEmpty = document.createElement("div");
        cardContainerEmpty.classList.add("card-container");
        main.appendChild(cardContainerEmpty)
    }

    addRemoveButtonEventListeners();
    addPopUpEventListeners();
}

addExampleBooksToLibrary();

renderLibrary();