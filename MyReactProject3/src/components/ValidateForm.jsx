import { useState } from "react"

const ValidateForm = ({ email, password }) =>  {
    const [error, setError] = useState('');

  const validateForm = () => {
    if (!email || !password) {
      setError('Both fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  return {validateForm, error}
}

export default ValidateForm