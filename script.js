async function loadBooks(){
let res = await fetch("/books");
let books = await res.json();

let list = document.getElementById("bookList");
list.innerHTML="";

books.forEach((book,index)=>{
list.innerHTML += `
<tr>
<td>${book.title}</td>
<td>${book.author}</td>
<td>
<button onclick="deleteBook(${index})">Delete</button>
</td>
</tr>
`;
});
}

async function addBook(){
let title=document.getElementById("title").value;
let author=document.getElementById("author").value;

await fetch("/books",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({title,author})
});

loadBooks();
}

async function deleteBook(index){
await fetch("/books/"+index,{
method:"DELETE"
});

loadBooks();
}

loadBooks();
