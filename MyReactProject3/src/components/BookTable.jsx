/* eslint-disable react/prop-types */

const BookTable = ({ books, onEdit }) => {
    return (
      <table className="table-auto w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-purple-800 text-center text-white font-bold">
            <td className="border p-3">Book Title</td>
            <td className="border p-3">Author</td>
            <td className="border p-3">Genre</td>
            <td className="border p-3">Year of Publication</td>
            <td className="border p-3">Actions</td>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id} className={`text-center ${index % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'}`}>
              <td className="p-4 border">{book.title}</td>
              <td className="p-4 border">{book.author}</td>
              <td className="p-4 border">{book.genre}</td>
              <td className="p-4 border">{book.year}</td>
              <td>
                <button 
                  onClick={() => onEdit(book.id)} 
                  className="bg-purple-800 text-white p-2 m-1 rounded hover:bg-purple-700 transition duration-200"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default BookTable;
  