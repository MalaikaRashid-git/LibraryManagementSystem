import { useState, useEffect } from "react";
import { getBooksFromLocalStorage } from "../components/localStorageUtil";
import SearchBar from "../components/SearchBar";  
import DropDowns from "../components/DropDowns";
import BookTable from "../components/BookTable";
import { Link, useNavigate} from "react-router-dom";

const BookTablePage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

const navigate = useNavigate();
  useEffect(() => {
    const storedBooks = getBooksFromLocalStorage();
    setBooks(storedBooks); 
  }, []);

  const filterBooks = () => {
    return books.filter((book) => {
      return (
        (search === '' || book.title.toLowerCase().includes(search.toLowerCase())) &&
        (author === '' || book.author === author) &&
        (genre === '' || book.genre === genre) &&
        (year === '' || book.year.toString() === year)
      );
    });
  };


  const handleEdit = (bookId) => {
    navigate(`/AddBookPage`, { state: { editBookId: bookId } });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-700 to-purple-900">
    <div className="shadow-xl rounded-lg p-6 md:p-8 w-full max-w-4xl bg-yellow-600 h-auto my-3">
      <h1 className="text-white text-3xl font-bold mb-4 text-center font-serif">Books List</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <DropDowns
        author={author}
        setAuthor={setAuthor}
        genre={genre}
        setGenre={setGenre}
        year={year}
        setYear={setYear}
      />
      <div className="ml-auto flex justify-end mr-2 mb-4">
        <Link to="/AddBookPage">
          <button className="mr-3 h-auto bg-purple-800 text-white p-2 rounded hover:shadow-lg hover:bg-purple-600 transition duration-200">
            Add New Book
          </button>
        </Link>
      </div>
      <BookTable books={filterBooks()} onEdit={handleEdit} />
    </div>
  </div>
);
};

export default BookTablePage;
