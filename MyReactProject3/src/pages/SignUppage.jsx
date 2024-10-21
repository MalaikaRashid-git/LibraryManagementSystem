import SignupForm from '../components/SignupForm';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
      <div className="flex h-screen mr-9">
        <div className="w-8/12 relative">
          <img src="../src/a_library.jpeg" alt="Sign Up" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-purple-300 opacity-50"></div> 
        </div>
  
        <div className="w-4/12 flex flex-col ml-20 items-center">
      <h2 className="text-purple-800 text-3xl font-extrabold mt-6 mb-4 font-serif text-center">Sign Up</h2>
      <SignupForm onSignUp={handleNavigate} onSignIn={handleNavigate} />
    </div>
      </div>
  );
};

export default SignUpPage;
