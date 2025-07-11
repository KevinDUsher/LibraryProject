const myLibrary = [];

function Book(name,author){
    if(!new.target){
        throw Error("Should use new key word for Book Object");
    }
    this.name = name;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author){
    myLibrary.push(new Book(name, author));
}