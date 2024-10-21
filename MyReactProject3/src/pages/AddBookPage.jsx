import { useState, useEffect } from "react";
import { getBooksFromLocalStorage, saveBooksToLocalStorage } from "../components/localStorageUtil";
import AddBookForm from "../components/AddBookForm";
import EditBookForm from "../components/EditBookForm";
import { useLocation, useNavigate } from 'react-router-dom';

const AddBookPage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const editBookId = location.state?.editBookId;  
  useEffect(() => {
    const storedBooks = getBooksFromLocalStorage();
    setBooks(storedBooks);
  }, []);

  const currentBook = books.find((book) => book.id === editBookId);

  const handleAddBook = (newBook) => {
    const updatedBooks = [...books, { ...newBook, id: Date.now() }]; 
    setBooks(updatedBooks);
    saveBooksToLocalStorage(updatedBooks);
    navigate('/BookTablePage');
  };

  const handleEditBook = (updatedBook) => {
    const updatedBooks = books.map(book => (book.id === updatedBook.id ? updatedBook : book));
    setBooks(updatedBooks);
    saveBooksToLocalStorage(updatedBooks);
    navigate('/BookTablePage'); 
  };

  return (
    <>
    
      {editBookId && currentBook ? (
        <EditBookForm 
          book={currentBook} 
          onEditBook={handleEditBook} 
          heading="Edit Book"
        />
      ) : (
        <AddBookForm onAdd={handleAddBook} />
      )}
    </>
  );
};

export default AddBookPage;
