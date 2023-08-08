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
        card.setAttribute('data-identifier',i);

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
        if(book.read==false)
            read.checked=false;
        else
            read.checked=true;
        read.id= `${i} read`;
        read.classList.add('read');

        read.addEventListener('click', (e)=>{
            let target= e.target.parentElement;
            library[target.dataset.identifier].read
                = !(library[target.dataset.identifier].read) ;
                syncProgress();
        })

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
        syncProgress();
    }
}




function syncProgress(){
    let progress=document.getElementById('progress');
    let label = progress.parentElement.firstChild
    let r=0;
    for(let i=0; i<library.length;i++){
        if(library[i].read==true)
            r++;
    }
    progress.setAttribute('max',library.length);
    progress.setAttribute('value',r);
    progress.textContent=r;
    label.textContent= `Books read: ${r} / ${library.length}`
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function saveForm(event){
    let title=document.getElementById('title').value;
    console.log(title);
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    let read=document.getElementById('form-read').checked;

   let book = new Book(title,author,pages,read);
   addBookToLibrary(book);
    event.preventDefault();
}

document.getElementById('add').addEventListener('click', openForm);

document.getElementById('close').addEventListener('click',closeForm);

document.getElementById('save').addEventListener('click',saveForm,false);



//Add some default books
let book1= new Book('Romeo & Juliette',"Seckspeare", "1564",false);
addBookToLibrary(book1);
let book2= new Book('OCarte',"Tu", "128",true);
addBookToLibrary(book2);
let book3= new Book('DouaCarte',"EL", "128",false);
addBookToLibrary(book3);


showBooks();