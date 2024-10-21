import { Routes , Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUppage';
import BookTablePage from './pages/BookTablePage';
import AddBookPage from './pages/AddBookPage';
import './App.css';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path = "/BookTablePage" element = {<BookTablePage/>} />
        <Route path = "/AddBookPage" element = {<AddBookPage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
