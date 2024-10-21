/* eslint-disable react/prop-types */

const InputField = ({label , type , placeholder}) => (
  
    <div className="mb-4">
      <label className="block text-gray-700 text-md font-bold mb-2"> {label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg w-full py-2 px-3 bg-purple-200 focus:outline-none focus:border-purple-500 transition duration-200"
      />
    </div>
    );
  
  
  export default InputField