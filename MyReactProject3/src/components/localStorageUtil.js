const BooksArray = [
    {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic", 
    year: 1925 
    },
    {
    title: "To Kill a Mockingbird", 
    author: "Harper Lee", 
    genre: "Fiction",
    year: 1960
    },
    {
    title: "Autobiography", 
    author: "George Orwell", 
    genre: "Dystopian", 
    year: 1949 
    },
    { 
    title: "Pride and Prejudice",
    author: "Jane Austen", 
    genre: "Romance", 
    year: 1813 
    },
    { 
    title: "Moby Dick", 
    author: "Herman Melville",
    genre: "Adventure",
    year: 1851 
    },
    { 
    title: "War and Peace", 
    author: "Leo Tolstoy", 
    genre: "Historical",
    year: 1869 
    },
    { 
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction", 
    year: 1925
    },
    {
    title: "Brave New World", 
    author: "Aldous Huxley",
    genre: "Science Fiction", 
    year: 1932 
    },
    { 
    title: "The Hobbit",
    author: "J.R.R. Tolkien", 
    genre: "Fantasy", 
    year: 1937 
    },
    { 
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky", 
    genre: "Philosophical", 
    year: 1866 
    }

];
export const getBooksFromLocalStorage =() =>{
const storedBooks = JSON.parse(localStorage.getItem('books'));
return storedBooks || BooksArray;
};

export const saveBooksToLocalStorage = (books) =>{
localStorage.setItem('books' , JSON.stringify(books));
};

