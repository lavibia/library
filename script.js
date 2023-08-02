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
        let book=library[i];
        let holder=document.getElementById('book-holder');
        let card=document.createElement('div');
        card.classList.add('card');

        let title= document.createElement('h3');
        title.textContent = book.title;
        title.classList.add('title');

        let author=document.createElement('p');
        author.textContent=`by ${book.author}`;
        author.classList.add('author');

        let pages= document.createElement('p');
        pages.textContent=`${book.pages} pages`;
        pages.classList.add('pages');

        let read=document.createElement('input');
        //Assigning attributes to read input
        read.type ='checkbox';
        read.name ="read";
        if(book.read==='false')
            read.checked=false;
        else
            read.checked=true;
        read.id= `${i} read`;
        read.classList.add('read');
        //Creating the label
        let label = document.createElement('label');
        label.appendChild(document.createTextNode('Read'));
        label.htmlFor=`${i} read`;
        label.classList.add('label-read');

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(label);
        holder.appendChild(card);
    }
}

let book1= new Book('Romeo & Juliette',"Seckspeare", "1564","false");
addBookToLibrary(book1);
let book2= new Book('OCarte',"Tu", "128","true");
addBookToLibrary(book2);
let book3= new Book('DouaCarte',"EL", "128","false");
addBookToLibrary(book3);
showBooks();
