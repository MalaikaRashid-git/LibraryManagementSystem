
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
 const navigate = useNavigate('')

  return (
    <div className="flex w-full h-screen">
    <LoginForm />

    <div className="bg-yellow-600 w-1/3 flex flex-col justify-center items-center text-white p-8">
      <h2 className="text-3xl font-bold mb-4">New Here?</h2>
      <p className="whitespace-normal text-center font-serif mb-6">
        Sign up today and <span className="md:block hidden">enjoy a huge collection of books 😊</span>
      </p>
      <button 
        className="bg-purple-800 text-white font-bold mt-6 py-2 px-4 rounded-full w-24 transition duration-200 hover:bg-purple-700 focus:outline-none focus:shadow-outline hover:shadow-lg" 
        onClick={() => navigate('/signup')}
      >
        Sign Up
      </button>
    </div>
  </div>
  );
};

export default LoginPage;
