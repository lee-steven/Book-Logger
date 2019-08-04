// const book = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);
// console.log(book.info());

let myLibrary = []; 

function Book(title, author, pages, read){
    this.title = title 
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages" + ", Read?: " +  read
    } 
}

function addBookToLibrary(book){
    myLibrary.push(book);
}