import { useState } from "react";
/* eslint-disable react/prop-types */

const AddBookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      year,
    };
    onAdd(newBook); 
    setTitle(''); 
    setAuthor('');
    setGenre('');
    setYear('');
  };

  return (
    <div className="bg-purple-200 min-h-screen w-full flex items-center justify-center">
    <div className="bg-purple-800 shadow-xl transform -translate-y-4 rounded-lg p-8 w-11/12 md:w-1/2 lg:w-1/3">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">Add New Book</h2>
      <form onSubmit={handleSubmit} className="bg-yellow-600 shadow-lg rounded-lg p-8">
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
          Add Book
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddBookForm;
