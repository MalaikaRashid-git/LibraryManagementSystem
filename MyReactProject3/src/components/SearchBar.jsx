/* eslint-disable react/prop-types */

const SearchBar = ({ search, setSearch }) => {
    return (
      <div className="relative mb-4 w-full max-w-md mx-auto">
      <input 
        type="text"
        placeholder="Search books..."
        className="p-2 w-full pl-10 rounded shadow-md bg-purple-200 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <i className="fas fa-search absolute top-2 left-3 text-gray-400"></i>
    </div>
  );
  };
  
  export default SearchBar;
  