let library =[];
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
function addBookToLibrary(book){
    library.push(book);
}

function showBooks(){
    for(let i=0; i<library.length;i++){
        let book=library[i].title;
        let holder=document.getElementById('book-holder');
        let card=document.createElement('div');
        card.classList.add('card');
        card.textContent = book;
        holder.appendChild(card);
    }
}

let book1= new Book('Carte',"Eu", "128","False");
addBookToLibrary(book1);
let book2= new Book('OCarte',"Tu", "128","True");
addBookToLibrary(book2);
let book3= new Book('DouaCarte',"EL", "128","False");
addBookToLibrary(book3);
showBooks();