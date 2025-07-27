const myLibrary = [];

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
        table.appendChild(row);
        console.log(table);
    }
    document.getElementsByClassName("body")[0].appendChild(table);
}

let table = document.createElement("table");
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

addBookToLibrary("TestBook1","Kevin", 345);
addBookToLibrary("TestBook2","Usher", 106);
addBookToLibrary("TestBook3","Jr", 400);

displayAllBooks(table);

