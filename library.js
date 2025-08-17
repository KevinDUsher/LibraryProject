const myLibrary = [];

function createForm(){
    let form = document.createElement("div");
    let bookName = document.createElement("input");
    bookName.id = "bookName";
    bookName.placeholder = "Book Name";
    bookName.minLength = 3;
    bookName.maxLength = 20;
    bookName.required = true;
    bookName.addEventListener("input", () => {
        if(bookName.checkValidity()){
            bookName.setCustomValidity("Must be between 3 to 20 characters");
        }
        else{
            bookName.setCustomValidity("");
        }
    });
    let author = document.createElement("input");
    author.id = "author";
    author.placeholder = "Author";
    author.minLength = 3;
    author.maxLength = 12;
    author.required = true;
    author.addEventListener("input", () => {
        if(author.validity){
            author.setCustomValidity("Must be between 3 to 12 characters");
        }
        else{
            author.setCustomValidity("");
        }
    });
    let pages = document.createElement("input");
    pages.type = "number";
    pages.id = "pages";
    pages.placeholder = "Pages";
    pages.minLength = 1;
    pages.required = true;
    pages.addEventListener("input", () => {
        if(pages.checkValidity()){
            pages.setCustomValidity("Must be number and at least 1 digit");
        }
        else{
            pages.setCustomValidity("");
        }
    });
    let submit = document.createElement("button");
    submit.id = "submit";
    submit.innerText = "Submit";
    submit.addEventListener("click", () => {
        document.getElementsByClassName("body")[0].innerHTML = "";
        addHeader();
        addBookToLibrary(bookName.value,author.value, pages.value);
        form.innerHTML = "";
        displayAllBooks(table);
        let addButton = document.createElement("button");
        addButton.innerText = "Add Book";
        addButton.addEventListener("click", () => {
            if(pages.checkValidity()){

            }
            createForm();
        });
        document.getElementsByClassName("body")[0].appendChild(addButton);
    });
    form.appendChild(bookName);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(submit);
    document.getElementsByClassName("body")[0].appendChild(form);
}

function Book(name,author, pageNumber){
    if(!new.target){
        throw Error("Should use new key word for Book Object");
    }
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pageNumber){
    myLibrary.push(new Book(name, author, pageNumber));
}
function displayAllBooks(table){
    for(const book of myLibrary){
        let row = document.createElement("tr");
        let cellOne = document.createElement("td");
        cellOne.appendChild(document.createTextNode(book.name));
        row.appendChild(cellOne);
        cellOne = document.createElement("td");
        cellOne.appendChild(document.createTextNode(book.author));
        row.appendChild(cellOne);
        cellOne = document.createElement("td");
        cellOne.appendChild(document.createTextNode(book.pageNumber));
        row.appendChild(cellOne);
        cellOne = document.createElement("td");
        let remove = document.createElement("button");
        remove.innerText = "Remove Book";
        remove.addEventListener("click", () => {
            let bookName = book.name;
            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].name === bookName) {
                    myLibrary.splice(i, 1); // deletes the book at index i
                    break; // stop once it's deleted
                }
            }
            row.remove();
        });
        cellOne.appendChild(remove);
        row.appendChild(cellOne);
        cellOne = document.createElement("td");
        let read = document.createElement("button");
        read.innerText = "Unread";
        read.classList = "unread";
        read.addEventListener("click", () => {
            if(read.innerText == "Unread"){
                read.innerText = "Read";
                read.classList = "read";
            }
            else{
                read.innerText = "Unread";
                read.classList = "unread";
            }
           
        });
        cellOne.appendChild(read);
        row.appendChild(cellOne);
        table.appendChild(row);
        console.log(table);
    }
    document.getElementsByClassName("body")[0].appendChild(table);
}

function addHeader(){
    let table = document.createElement("table");
    table.id = "table";
    let header = document.createElement("tr");

    let nameHeader = document.createElement("td");
    nameHeader.appendChild(document.createTextNode("Book Name"));
    header.appendChild(nameHeader);

    let authorHeader = document.createElement("td");
    authorHeader.appendChild(document.createTextNode("Author"));
    header.appendChild(authorHeader);

    let pagesHeader = document.createElement("td");
    pagesHeader.appendChild(document.createTextNode("Pages"));
    header.appendChild(pagesHeader);
    table.appendChild(header);
    document.getElementsByClassName("body")[0].appendChild(table);
}

addHeader();
addBookToLibrary("TestBook1","Kevin", 345);
addBookToLibrary("TestBook2","Usher", 106);
addBookToLibrary("TestBook3","Jr", 400);
console.log(document.getElementById("table"));
displayAllBooks(document.getElementById("table"));

let addButton = document.createElement("button");
addButton.innerText = "Add Book";
addButton.addEventListener("click", () => {
    createForm();
});

document.getElementsByClassName("body")[0].appendChild(addButton);
