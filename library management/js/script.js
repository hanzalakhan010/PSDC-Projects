const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      isbn: "978-0-06-112008-4"
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      isbn: "978-0-452-28423-4"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: 1813,
      isbn: "978-1-59308-028-3"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
      isbn: "978-0-7432-7356-5"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      year: 1951,
      isbn: "978-0-316-76948-0"
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      genre: "Adventure",
      year: 1851,
      isbn: "978-1-5011-6473-9"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1937,
      isbn: "978-0-261-10221-4"
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1954,
      isbn: "978-0-618-63494-1"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      year: 1997,
      isbn: "978-0-7475-3269-6"
    },
    {
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      genre: "Biography",
      year: 1947,
      isbn: "978-0-553-29698-6"
    }
  ];
function renderBooks(){
    for(let i = 0;i<books.length;i++){
        document.getElementById('books').innerHTML+=`
        <div>
            <span class = 'bookTitle'>${books[i].title}</span>
            <span class = 'bookAuthor'>${books[i].author}</span>
            <span class = 'bookGenre'>${books[i].genre}</span>
            <span class = 'bookYear'>${books[i].year}</span>
            <span class = 'bookIsbn'>${books[i].isbn}</span>
        </div>
        `
    }
  }