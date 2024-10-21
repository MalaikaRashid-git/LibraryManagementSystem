/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const DropDowns = ({ author, setAuthor, genre, setGenre, year, setYear }) => {
    return (
      <div className="flex flex-col items-center mb-4 bg-purple-800 p-4 rounded shadow-md">
      <div className="flex gap-4 w-full max-w-md">
        <select 
          className="border bg-purple-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" 
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Filter by genre</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Classic">Classic</option>
          <option value="Fiction">Fiction</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Action">Action</option>
          <option value="Fairy tale">Fairy tale</option>
        </select>
        <select 
          className="border p-2 bg-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" 
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Filter by author</option>
          <option value="F. Scott Fitzgerald">F. Scott Fitzgerald</option>
          <option value="Harper Lee">Harper Lee</option>
          <option value="George Eliot">George Eliot</option>
          <option value="Richard Bachman">Richard Bachman</option>
          <option value="George Orwell">George Orwell</option>
        </select>
        <select 
          className="border p-2 bg-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" 
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Filter by year</option>
          <option value="1925">1925</option>
          <option value="1960">1960</option>
          <option value="1949">1949</option>
          <option value="1988">1988</option>
          <option value="1971">1971</option>
        </select>
      </div>
    </div>
    );
  };
  
  export default DropDowns;
  