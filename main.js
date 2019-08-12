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
    let list = document.getElementById('listBooks');

    for(let i = 0; i < myLibrary.length; i++){
        let li = document.createElement('li');
        list.appendChild(li);
        li.innerHTML = myLibrary[i].info();
        
    }
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
const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'hello', true);
const harrypotter = new Book('Harry Potter', 'J.K. Rowling', 100, 'hello', true);
const theroad = new Book('The Road', 'Cormac McCarthy', 300, 'hello', true);
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

    var li = document.createElement('li');
    var liText = document.createTextNode(myLibrary[myLibrary.length-1].info());
    li.appendChild(liText);
    document.getElementById('listBooks').appendChild(li);


//     var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
}


