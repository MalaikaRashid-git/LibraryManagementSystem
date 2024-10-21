import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const EditBookForm = ({ book , onEditBook , heading }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setGenre(book.genre);
      setYear(book.year);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { 
    ...book,
    title, 
    author,
    genre, 
    year
   };
    onEditBook(updatedBook);
    navigate('/BookTablePage');
  };

    return (
      <div className="flex items-center justify-center min-h-screen bg-purple-200">
      <div className="bg-purple-800 shadow-xl transform -translate-y-4 rounded-lg p-8">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">{heading}</h2>
        <form onSubmit={handleSubmit} className="bg-yellow-600 shadow-lg rounded-lg p-8 w-96">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-purple-900">Title</label>
            <input
              type="text"
              value={title}
              className="border w-full p-2 rounded text-gray-800"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-purple-900">Author</label>
            <input
              type="text"
              value={author}
              className="border w-full p-2 rounded text-gray-800"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-purple-900">Genre</label>
            <input
              type="text"
              value={genre}
              className="border w-full p-2 rounded text-gray-800"
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-purple-900">Year</label>
            <input
              type="number"
              value={year}
              className="border w-full p-2 rounded text-gray-800"
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-purple-900 text-white p-2 rounded hover:bg-purple-700 transition duration-200">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBookForm;
