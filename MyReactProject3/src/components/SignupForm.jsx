/* eslint-disable react/prop-types */
import InputField from "./InputField"
import CheckboxField from "./CheckboxField"
import Button from "./Button"

const SignupForm = ({onSignUp , onSignIn}) => {
  return (
    <form className="bg-yellow-600 p-6 w-full max-w-md shadow-lg rounded-lg">
    <InputField label="Full name" type="text" placeholder="Enter full name" />
    <InputField label="Email" type="email" placeholder="Enter email" />
    <InputField label="Username" type="text" placeholder="Enter user name" />
    <InputField label="Password" type="password" placeholder="Enter password" />
    <InputField label="Confirm Password" type="password" placeholder="Confirm password" />

    <CheckboxField label="I agree to the <b>term of use</b>" />

    <div className="flex justify-between mt-4">
      <Button 
        label="Sign up" 
        onClick={onSignUp} 
        className="bg-purple-800 text-white hover:bg-purple-700 transition duration-200"
      />
      <Button 
        label="Sign in" 
        onClick={onSignIn} 
      />
    </div>
  </form>
  );
}

export default SignupForm