let myLibrary = []; 

function Book(title, author, pages, notes, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.notes = notes
    this.read = read,
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages. Notes: " + notes +   ", Read?: " +  read
    } 
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function render(){

    for(let i = 0; i < myLibrary.length; i++){
        createCard(myLibrary[i]);        
    }
}

function createCard(book){
    let list = document.getElementById('listBooks');

    let card = document.createElement('div');

    let titleCard = document.createElement('h3');
    titleCard.innerHTML = book.title;
    card.appendChild(titleCard);

    let authorCard = document.createElement('h6');
    authorCard.innerHTML = book.author;
    card.appendChild(authorCard);

    let pagesCard = document.createElement('p');
    pagesCard.innerHTML = book.pages;
    card.appendChild(pagesCard);

    let notesCard = document.createElement('p');
    notesCard.innerHTML = book.notes;
    card.appendChild(notesCard);

    card.style.width = "200px";
    card.style.height = "200px";
    card.style.background = "white";
    card.style.color = "gray";
    card.style.borderRadius = "5px";
    card.style.padding = "20px"
    card.style.margin = "20px"
    card.style.boxShadow = "10px 10px 10px lightgray";

    list.appendChild(card);
}

let modalBtn = document.getElementById("addBook")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

//  DELETE LATER: CREATED FOR TESTING PURPOSES  // 
const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'Loved the hobbit over the trilogy which is weird I guess haha', true);
const harrypotter = new Book('Harry Potter', 'J.K. Rowling', 100, 'A childhood classic. The books are better than the movies.', true);
const theroad = new Book('The Road', 'Cormac McCarthy', 300, 'This book is really sad but I really loved it, one of my favoirte books', true);
myLibrary[0] = hobbit;
myLibrary[1] = harrypotter;
myLibrary[2] = theroad;

render();

let bookSubmitted = document.getElementById('submit').addEventListener('click', addBookToLibrary);
function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = Number(document.getElementById('pages').value);
    let notes = document.getElementById('notes').value;
    let didIRead ='';

    let radioButton = document.getElementsByName('finished');
    for(let i = 0; i < radioButton.length; i++){
        if(radioButton[i].checked){
            didIRead = radioButton[i].value;
            console.log(didIRead);
        }
    }

    let newBook = new Book(title, author, pages, notes, didIRead);
    myLibrary.push(newBook);

    console.table(myLibrary);

    modal.style.display = "none"

    // var li = document.createElement('li');
    // var liText = document.createTextNode(myLibrary[myLibrary.length-1].info());
    // li.appendChild(liText);
    // document.getElementById('listBooks').appendChild(li);
    createCard(myLibrary[myLibrary.length-1]);
}


