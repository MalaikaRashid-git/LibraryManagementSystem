import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ValidateForm from './ValidateForm';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();
   
  const { validateForm, error } = ValidateForm({ email, password });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log({ email, password });
          navigate('/BookTablePage');
        }
      };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-700 to-purple-900">
            <div className="shadow-xl rounded-lg p-8 md:p-10 w-full max-w-md bg-yellow-600">
                <h1 className="text-3xl text-center mb-10 text-purple-800 font-extrabold">Login to Your Account</h1>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <input
                            id="email"
                            type="email"
                            className={`shadow appearance-none rounded-full w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-lg bg-purple-100
                            ${error.includes('email') ? 'border-red-700' : ''}`}
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            id="password"
                            type="password"
                            className={`shadow appearance-none rounded-full w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:shadow-lg bg-purple-100
                            ${error.includes('Password') ? 'border-red-700' : ''}`}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="#" className="font-bold text-sm text-purple-800 hover:text-purple-900 hover:underline flex justify-end mt-2">
                            Forgot Password?
                        </a>
                    </div>
                    {error && <p className="text-red-700 text-xs italic mb-4">{error}</p>}
                    <div className="flex justify-center mt-6">
                        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-24 hover:shadow-lg" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )


}
export default LoginForm